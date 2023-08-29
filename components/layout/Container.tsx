import "./container.css";

interface ContainerProps {
  children: React.ReactNode;
  small?: boolean;
}

export default function Container(props: ContainerProps): React.ReactElement {
  return (
    <div className={`container${props.small ? " small" : ""}`}>
      {props.children}
    </div>
  );
}
