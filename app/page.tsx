import "./home.css";

// Components
import Jumbotron from "@/components/ui/Jumbotron";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/ui/ProductCard";
import GridContainer from "@/components/layout/GridContainer";
import CategoryCard from "@/components/ui/CategoryCard";
// Images
import softsenseDesktop from "../public/images/hero/hero_softsense-desktop.jpeg";
import softsenseMobile from "../public/images/hero/hero_softsense-mobile.jpeg";
import softsenseTablet from "../public/images/hero/hero_softsense-tablet.jpeg";
import outletDesktop from "../public/images/hero/hero-outlet-desktop.png";
import outletTablet from "../public/images/hero/hero-outlet-tablet.png";

export default function Home() {
  return (
    <main id="home">
      <Section>
        <Jumbotron
          desktop={softsenseDesktop}
          tablet={softsenseTablet}
          mobile={softsenseMobile}
          alt="softsense hero"
          label="Scopri i prodotti"
          href="/prodotti"
        />
      </Section>
      <Section className="top bottom">
        <Container>
          <h2>
            Abbigliamento sportivo morbido, per una maggiore libertà di
            movimento.
          </h2>
          <GridContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </GridContainer>
        </Container>
      </Section>
      <Section>
        <Jumbotron
          desktop={outletDesktop}
          tablet={outletTablet}
          mobile={outletTablet}
          alt="softsense hero"
          label="Visita il nostro outlet"
          href="/prodotti"
        />
      </Section>
      <Section className="top bottom">
        <Container>
          <GridContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </GridContainer>
        </Container>
      </Section>
      <Section className="bottom">
        <Container>
          <h2>Acquista per categoria</h2>
          <GridContainer>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </GridContainer>
        </Container>
      </Section>
    </main>
  );
}
