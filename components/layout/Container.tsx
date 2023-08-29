import "./container.css";

export default function Container({
  children,
  small,
}: {
  children: React.ReactNode;
  small?: boolean;
}): React.ReactElement {
  return <div className={`container${small ? " small" : ""}`}>{children}</div>;
}
