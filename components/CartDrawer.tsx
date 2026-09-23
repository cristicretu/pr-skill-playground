"use client";

import type { Product } from "@/lib/products";

export type CartLine = { product: Product; qty: number };

export function CartDrawer({ open, lines, onClose }: { open: boolean; lines: CartLine[]; onClose: () => void }) {
  const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);

  return (
    // Stays mounted so it can slide out; `inert` keeps it out of focus and the
    // a11y tree while closed, and CSS hides it once the exit transition ends.
    <div className="cart-layer" data-open={open || undefined} inert={!open}>
      <div className="scrim" onClick={onClose} />
      <aside className="drawer" aria-label="Cart">
        <header className="drawer-head">
          <h2>Your cart</h2>
          <button onClick={onClose} aria-label="Close cart" data-testid="close-cart">×</button>
        </header>
        {lines.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <ul className="lines">
            {lines.map((l) => (
              <li key={l.product.id}>
                <span>{l.product.name}</span>
                <span className="muted">×{l.qty}</span>
                <span className="num">${(l.product.price * l.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <footer className="drawer-foot">
          <span className="total">Total ${total.toFixed(2)}</span>
          <button className="checkout" disabled={lines.length === 0}>Checkout</button>
        </footer>
      </aside>
    </div>
  );
}
