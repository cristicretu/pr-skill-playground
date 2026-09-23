import { recentOrdersWithCustomers } from "@/lib/orders";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const orders = await recentOrdersWithCustomers();
  return (
    <main className="page">
      <h1>Recent orders</h1>
      <table className="orders">
        <thead>
          <tr><th>Order</th><th>Customer</th><th>Placed</th><th className="num">Total</th></tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>#{o.id}</td>
              <td>{o.customer?.name ?? "Unknown"}</td>
              <td>{new Date(o.placedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</td>
              <td className="num">${o.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
