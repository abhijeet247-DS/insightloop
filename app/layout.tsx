import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InsightLoop — Learn by understanding",
  description: "A visual, interactive way to learn data science.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
