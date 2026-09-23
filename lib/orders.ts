import { db, type Customer, type Order } from "./db";

export type OrderWithCustomer = Order & { customer: Customer | null };

export async function recentOrdersWithCustomers(limit = 20): Promise<OrderWithCustomer[]> {
  const orders = await db.recentOrders(limit);
  const result: OrderWithCustomer[] = [];
  for (const order of orders) {
    result.push({ ...order, customer: await db.customerById(order.customerId) });
  }
  return result;
}
