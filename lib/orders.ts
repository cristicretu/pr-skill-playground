import { db, type Customer, type Order } from "./db";

export type OrderWithCustomer = Order & { customer: Customer | null };

export async function recentOrdersWithCustomers(limit = 20): Promise<OrderWithCustomer[]> {
  const orders = await db.recentOrders(limit);
  if (orders.length === 0) return [];

  // One query for every customer on the page, instead of one per order.
  const ids = [...new Set(orders.map((o) => o.customerId))];
  const customers = await db.customersByIds(ids);
  const byId = new Map(customers.map((c) => [c.id, c]));

  return orders.map((order) => ({ ...order, customer: byId.get(order.customerId) ?? null }));
}
