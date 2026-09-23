// A stand-in for a real database: every query costs a network round trip.
const ROUND_TRIP_MS = 15;

export type Customer = { id: number; name: string; email: string };
export type Order = { id: number; customerId: number; total: number; placedAt: string };

const customers: Customer[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: ["Ada Lovelace", "Grace Hopper", "Linus Torvalds", "Margaret Hamilton", "Ken Thompson", "Barbara Liskov",
    "Dennis Ritchie", "Radia Perlman", "Alan Kay", "Frances Allen", "John McCarthy", "Hedy Lamarr"][i],
  email: `customer${i + 1}@example.com`,
}));

const orders: Order[] = Array.from({ length: 20 }, (_, i) => ({
  id: 1000 + i,
  customerId: (i * 7) % 12 + 1,
  total: Math.round(((i * 37) % 180 + 12.5) * 100) / 100,
  placedAt: new Date(Date.UTC(2026, 8, 1 + i)).toISOString(),
}));

let queryCount = 0;

async function roundTrip<T>(value: T): Promise<T> {
  queryCount++;
  await new Promise((r) => setTimeout(r, ROUND_TRIP_MS));
  return structuredClone(value);
}

export const db = {
  recentOrders: (limit: number) => roundTrip(orders.slice(0, limit)),
  customerById: (id: number) => roundTrip(customers.find((c) => c.id === id) ?? null),
  customersByIds: (ids: number[]) => roundTrip(customers.filter((c) => ids.includes(c.id))),
  queryCount: () => queryCount,
};
