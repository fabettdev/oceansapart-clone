import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ProductsContainer from "@/components/layout/ProductsContainer";

export const metadata: Metadata = {
  title: "OCEANSAPART Clone",
  description: "OCEANSAPART Clone Made By Fabettdev",
};

interface ProductsLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ProductsLayoutProps) {
  return (
    <Container>
      <ProductsContainer>{children}</ProductsContainer>
    </Container>
  );
}
