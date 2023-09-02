"use client";
import Link from "next/link";
import "./button.css";
import { Url } from "next/dist/shared/lib/router/router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  href?: Url;
}

export default function Button({
  label,
  className,
  href,
  ...props
}: ButtonProps): React.ReactElement {
  return href ? (
    <Link href={href} className={`button ${className ?? ""}`}>
      {label}
    </Link>
  ) : (
    <button className={`button ${className ?? ""}`} {...props}>
      {label}
    </button>
  );
}
