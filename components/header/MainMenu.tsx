import "./main-menu.css";
import logo from "../../public/images/brand/oa-logo.png";
import Image from "next/image";
import MobileMenuToggler from "./MobileMenuToggler";
import MobileMenu from "./MobileMenu";
import { BsBag } from "react-icons/bs";

export default function MainMenu(): React.ReactElement {
  return (
    <nav id="main-menu">
      <MobileMenuToggler />
      <Image className="logo" src={logo} alt="logo" />
      <BsBag size={"1.25rem"} />
      <MobileMenu />
    </nav>
  );
}
