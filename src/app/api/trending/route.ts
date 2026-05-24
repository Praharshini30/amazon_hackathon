import { NextResponse } from 'next/server';
import { cacheTopN } from '@/lib/valkey';
import { CATEGORIES } from '@/lib/categories';

export async function GET() {
  try {
    const raw = await cacheTopN('zset:trending_dreams', 6);

    if (raw.length > 0) {
      const enriched = raw.map((item) => {
        const cat = CATEGORIES.find((c) => c.id === item.value);
        return {
          categoryId: item.value,
          count: item.score,
          name: cat?.name || item.value,
          emoji: cat?.emoji || '✨',
          gradient: cat?.gradient || 'from-brand-500 to-purple-500',
          description: cat?.description || '',
        };
      });
      return NextResponse.json(enriched);
    }

    // Fallback if Valkey is empty
    const defaults = CATEGORIES.slice(0, 6).map((c) => ({
      categoryId: c.id,
      count: 0,
      name: c.name,
      emoji: c.emoji,
      gradient: c.gradient,
      description: c.description,
    }));
    return NextResponse.json(defaults);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
