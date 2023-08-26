import "./top-menu.css";

import Link from "next/link";

export default function TopMenu(): React.ReactElement {
  return (
    <nav id="top-menu">
      <Link href={"/dummy"}>
        10% di sconto su tutto con il codice <strong>HELLO10</strong>
      </Link>
    </nav>
  );
}
