import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header/Header";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

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
      <body data-theme="light" className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
