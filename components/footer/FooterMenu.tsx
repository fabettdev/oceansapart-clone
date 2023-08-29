import "./footer-menu.css";
// Data
import { footerMenu } from "@/mocks/footerMenu";
// Components
import Container from "../layout/Container";
import FooterMenuList from "../FooterMenuList";

export default function FooterMenu(): React.ReactElement {
  return (
    <section id="footer-menu">
      <Container small>
        <div className="footer-menu-wrapper">
          <div className="item">
            <FooterMenuList menu={footerMenu[0]} />
          </div>
          <div className="item">
            <FooterMenuList menu={footerMenu[1]} />
          </div>
          <div className="language">LANGUAGE SWITCHER</div>
          <div className="legal">
            <FooterMenuList menu={footerMenu[2]} row />
          </div>
        </div>
      </Container>
    </section>
  );
}
