import "./desktop-menu-sub-item.css";

import Link from "next/link";

export default function DesktopMenuSubItem(props: any) {
  function mapSubMenuItem(item: any) {
    return (
      <li key={item.id}>
        <Link href={item.href}>{item.anchor}</Link>
      </li>
    );
  }
  return (
    <div className="desktop-sub-item">
      <ul>{props.menu.map(mapSubMenuItem)}</ul>
    </div>
  );
}
