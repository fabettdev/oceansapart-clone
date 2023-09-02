import "./right-menu.css";
// Components
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

export default function RightMenu(): React.ReactElement {
  return (
    <nav id="right-menu">
      <input style={{ border: "1px solid black" }} />
      <Link href={"/"}>
        <AiOutlineUser size={"1.25rem"} />
      </Link>
      <Link href={"/"}>
        <BsBag size={"1.25rem"} />
      </Link>
    </nav>
  );
}
