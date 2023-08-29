import Logo from "../ui/Logo";
import "./brand-links.css";

import oaLogo from "../../public/images/brand/oa-logo.png";
import Link from "next/link";
import Container from "../layout/Container";

export default function BrandLinks(): React.ReactElement {
  return (
    <section id="brand-links">
      <Container small>
        <nav>
          <Logo src={oaLogo} name="oceansapart" />
          <ul>
            <li>
              <Link href={"/valori"}>I nostri valori</Link>
            </li>
            <li>
              <Link href={"/impatto"}>Il nostro impatto</Link>
            </li>
            <li>
              <Link href={"/lavoro"}>Offerte di lavoro</Link>
            </li>
            <li>
              <Link href={"/collaborazioni"}>Collaborazioni</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
}
