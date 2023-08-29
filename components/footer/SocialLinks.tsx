import "./social-links.css";

import Logo from "../ui/Logo";

import instagram from "../../public/images/social/instagram.svg";
import facebook from "../../public/images/social/facebook.svg";

export default function SocialLinks(): React.ReactElement {
  return (
    <section id="social-links">
      <a href="#" target="_blank">
        <Logo src={facebook} name="facebook" className="social" />
      </a>
      <a href="#" target="_blank">
        <Logo src={instagram} name="instagram" className="social" />
      </a>
    </section>
  );
}
