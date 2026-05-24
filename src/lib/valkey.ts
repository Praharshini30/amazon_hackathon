import { createClient, type RedisClientType } from 'redis';

let client: RedisClientType | null = null;
let isConnected = false;

export async function getValkeyClient(): Promise<RedisClientType | null> {
  if (client && isConnected) return client;

  try {
    client = createClient({
      url: process.env.VALKEY_URL || 'redis://localhost:6379',
      socket: {
        reconnectStrategy: (retries) => {
          if (retries > 3) return new Error('Valkey unavailable');
          return Math.min(retries * 300, 2000);
        },
      },
    });

    client.on('connect', () => { isConnected = true; });
    client.on('error', () => { isConnected = false; });

    await client.connect();
    return client;
  } catch {
    console.warn('[Valkey] Not available — running without cache');
    return null;
  }
}

// Safe cache operations that never throw
export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    const c = await getValkeyClient();
    if (!c) return null;
    const raw = await c.get(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function cacheSet(key: string, value: unknown, ttlSeconds = 3600): Promise<void> {
  try {
    const c = await getValkeyClient();
    if (!c) return;
    await c.set(key, JSON.stringify(value), { EX: ttlSeconds });
  } catch {
    // non-critical
  }
}

export async function cacheIncr(key: string, member: string): Promise<void> {
  try {
    const c = await getValkeyClient();
    if (!c) return;
    await c.zIncrBy(key, 1, member);
  } catch {
    // non-critical
  }
}

export async function cacheTopN(key: string, n = 10): Promise<Array<{ value: string; score: number }>> {
  try {
    const c = await getValkeyClient();
    if (!c) return [];
    return await c.zRangeWithScores(key, 0, n - 1, { REV: true });
  } catch {
    return [];
  }
}

export async function streamAdd(streamKey: string, data: Record<string, string>): Promise<void> {
  try {
    const c = await getValkeyClient();
    if (!c) return;
    await c.xAdd(streamKey, '*', data);
  } catch {
    // non-critical
  }
}
