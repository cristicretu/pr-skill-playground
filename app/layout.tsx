import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pour — coffee gear" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <Link href="/" className="brand">Pour</Link>
          <nav><Link href="/">Shop</Link><Link href="/orders">Orders</Link></nav>
        </header>
        {children}
      </body>
    </html>
  );
}
