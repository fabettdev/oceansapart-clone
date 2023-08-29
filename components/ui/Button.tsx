"use client";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({
  label,
  className,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button className={`button ${className ?? ""}`} {...props}>
      {label}
    </button>
  );
}
