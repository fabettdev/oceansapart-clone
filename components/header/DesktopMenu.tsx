import Link from "next/link";
import "./desktop-menu.css";
// Mocks
import { desktopMenu } from "@/mocks/desktopMenu";
import DesktopMenuSubItem from "./DesktopMenuSubItem";

export default function DesktopMenu(): React.ReactElement {
  function mapDesktopMenu(item: any, index: number) {
    return (
      <li key={index}>
        <Link href={item.href}>{item.title}</Link>
        {item.items.length > 0 && <DesktopMenuSubItem menu={item.items} />}
      </li>
    );
  }

  return (
    <nav id="desktop-menu">
      <ul>{desktopMenu.map(mapDesktopMenu)}</ul>
    </nav>
  );
}
