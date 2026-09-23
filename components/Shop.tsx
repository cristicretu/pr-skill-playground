"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { CartDrawer, type CartLine } from "./CartDrawer";

export function Shop({ products }: { products: Product[] }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  function add(product: Product) {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) return prev.map((l) => (l === existing ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { product, qty: 1 }];
    });
  }

  const count = lines.reduce((n, l) => n + l.qty, 0);

  return (
    <>
      <button className="cart-button" onClick={() => setOpen(true)} data-testid="open-cart">
        Cart{count > 0 ? ` (${count})` : ""}
      </button>
      <ul className="grid">
        {products.map((p) => (
          <li key={p.id} className="card">
            <div className="swatch" style={{ background: `oklch(0.8 0.08 ${p.hue})` }} />
            <h2>{p.name}</h2>
            <p className="muted">${p.price.toFixed(2)}</p>
            <button onClick={() => add(p)} data-testid={`add-${p.id}`}>Add to cart</button>
          </li>
        ))}
      </ul>
      <CartDrawer open={open} lines={lines} onClose={() => setOpen(false)} />
    </>
  );
}
