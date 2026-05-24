import { NextRequest, NextResponse } from 'next/server';
import { detectCategory } from '@/lib/categories';
import { buildJourney } from '@/lib/products';
import { cacheGet, cacheSet, cacheIncr, streamAdd } from '@/lib/valkey';
import { v4 as uuid } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const { dream, budget } = await req.json();

    if (!dream || typeof dream !== 'string' || dream.trim().length < 2) {
      return NextResponse.json({ error: 'Please provide a valid aspiration.' }, { status: 400 });
    }

    const aspiration = dream.trim();
    const category = detectCategory(aspiration);
    const cacheKey = `journey:${category.id}:${budget || 0}`;

    // Check cache
    let journey = await cacheGet<ReturnType<typeof buildJourney>>(cacheKey);
    if (!journey) {
      journey = buildJourney(category.id, aspiration);
      await cacheSet(cacheKey, journey, 3600);
    } else {
      // Update aspiration text for this request
      journey = { ...journey, id: uuid(), aspiration, createdAt: new Date().toISOString() };
    }

    // Track trending + event (fire-and-forget)
    cacheIncr('zset:trending_dreams', category.id);
    streamAdd('stream:events', {
      event: 'dream_generated',
      category: category.id,
      aspiration,
      ts: String(Date.now()),
    });

    return NextResponse.json(journey);
  } catch (err: any) {
    console.error('[POST /api/dream]', err?.message);
    return NextResponse.json({ error: 'Failed to generate journey.' }, { status: 500 });
  }
}
