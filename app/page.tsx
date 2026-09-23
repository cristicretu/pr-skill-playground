import { products } from "@/lib/products";
import { Shop } from "@/components/Shop";

export default function Home() {
  return (
    <main className="page">
      <h1>Brew better at home</h1>
      <Shop products={products} />
    </main>
  );
}
