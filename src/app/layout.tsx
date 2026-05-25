import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "ContextFlow Kitchen", description: "Recipe and nutrition assistant with ingredient analysis, meal planning, and dietary tracking." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="antialiased">{children}</body></html>);
}
