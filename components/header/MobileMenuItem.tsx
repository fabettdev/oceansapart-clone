"use client";

import Link from "next/link";

import "./mobile-menu-item.css";

interface MobileMenuItemProps {
  href: string;
  src: string;
  anchor: string;
}

export default function MobileMenuItem(
  props: MobileMenuItemProps
): React.ReactElement {
  return (
    <li className="mobile-menu-item">
      {props.href ? (
        <Link href={props.href}>
          <div className="image">
            <img src={props.src} />
          </div>
          <div className="anchor">{props.anchor}</div>
        </Link>
      ) : (
        <div>
          <div className="image">
            <img src={props.src} />
          </div>
          <div className="anchor">{props.anchor}</div>
        </div>
      )}
    </li>
  );
}
