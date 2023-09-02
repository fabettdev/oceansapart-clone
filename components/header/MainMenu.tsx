import "./main-menu.css";

// Logo
import logo from "../../public/images/brand/oa-logo.png";

// Components
import Image from "next/image";
import MobileMenuToggler from "./MobileMenuToggler";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import RightMenu from "./RightMenu";

export default function MainMenu(): React.ReactElement {
  return (
    <nav id="main-menu">
      <MobileMenuToggler />
      <Link href={"/"}>
        <Image className="logo" src={logo} alt="logo" />
      </Link>
      <DesktopMenu />
      <RightMenu />
      <MobileMenu />
    </nav>
  );
}
