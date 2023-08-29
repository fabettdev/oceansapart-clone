import Providers from "./Providers";
import BrandLinks from "./BrandLinks";
import FooterMenu from "./FooterMenu";
import NewsletterForm from "./NewsletterForm";
import SocialLinks from "./SocialLinks";
import CopyrightBar from "./CopyrightBar";

export default function Footer(): React.ReactElement {
  return (
    <footer>
      <NewsletterForm />
      <BrandLinks />
      <Providers />
      <FooterMenu />
      <SocialLinks />
      <CopyrightBar />
    </footer>
  );
}
