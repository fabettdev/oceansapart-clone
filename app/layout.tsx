import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCEANSAPART Clone",
  description: "OCEANSAPART Clone Made By Fabettdev",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="it">
      <body data-theme="light">{children}</body>
    </html>
  );
}
