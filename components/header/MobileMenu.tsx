"use client";
import "./mobile-menu.css";

import { mobileMenu } from "@/mocks/mobileMenu";
import MobileMenuItem from "./MobileMenuItem";

export default function MobileMenu(): React.ReactElement {
  function mapMenu(item: any, key: number) {
    return (
      <MobileMenuItem
        key={item.id}
        href={item.href}
        src={item.src}
        anchor={item.anchor}
      />
    );
  }

  return (
    <div id="mobile-menu">
      <ul>{mobileMenu.map(mapMenu)}</ul>
    </div>
  );
}
