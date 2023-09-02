import "./grid-container.css";

export default function GridContainer({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div className="grid-container">{children}</div>;
}
