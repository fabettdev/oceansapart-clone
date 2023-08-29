import "./providers.css";
import maestroLogo from "../../public/images/providers/maestro.svg";
import paypalLogo from "../../public/images/providers/paypal.svg";
import mastercardLogo from "../../public/images/providers/mastercard.svg";
import klarnaLogo from "../../public/images/providers/klarna.svg";
import visaLogo from "../../public/images/providers/visa.svg";
// Components
import Container from "../layout/Container";
import Logo from "../ui/Logo";

export default function Providers(): React.ReactElement {
  return (
    <section id="providers">
      <Container small>
        <div className="providers-container">
          <Logo src={paypalLogo} name="paypal" className="provider" />
          <Logo src={mastercardLogo} name="mastercard" className="provider" />
          <Logo src={visaLogo} name="visa" className="provider" />
          <Logo src={maestroLogo} name="maestro" className="provider" />
          <Logo src={klarnaLogo} name="klarna" className="provider" />
        </div>
      </Container>
    </section>
  );
}
