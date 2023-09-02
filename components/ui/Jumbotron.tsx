import Link from "next/link";
import "./jumbotron.css";

// Images
import { StaticImageData } from "next/image";
import Button from "./Button";

interface JumbotronProps {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
  alt: string;
  label: string;
  href: string;
}

export default function Jumbotron(props: JumbotronProps): React.ReactElement {
  return (
    <div className="jumbotron">
      <picture>
        <source media="(min-width:992px)" srcSet={props.desktop.src} />
        <source media="(min-width:768px)" srcSet={props.tablet.src} />
        <img src={props.mobile.src} alt={props.alt} />
      </picture>
      <div className="cta">
        <Button className="big white" href={props.href} label={props.label} />
      </div>
    </div>
  );
}
