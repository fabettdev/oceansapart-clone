import "./section.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section(props: SectionProps): React.ReactElement {
  return (
    <section
      id={props.id}
      className={`section${props.className ? ` ${props.className}` : ""}`}
    >
      {props.children}
    </section>
  );
}
