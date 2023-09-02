import "./products.css";

// Components
import GridContainer from "@/components/layout/GridContainer";
import Section from "@/components/layout/Section";
import ProductCard from "@/components/ui/ProductCard";
import ResultsCount from "@/components/ui/ResultsCount";
import Pagination from "@/components/ui/Pagination";

export default function Prodotti(): React.ReactElement {
  return (
    <main id="products">
      <header>
        <h1>Pants</h1>
      </header>
      <Section>
        <div>
          <ResultsCount currentPage={1} pages={10} results={197} />
        </div>
        <GridContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </GridContainer>
      </Section>
      <Pagination />
    </main>
  );
}
