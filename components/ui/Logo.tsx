import Image, { StaticImageData } from "next/image";

interface LogoProps {
  src: string | StaticImageData;
  name: string;
  className?: string;
}

export default function Logo({
  src,
  name,
  className,
}: LogoProps): React.ReactElement {
  return (
    <figure>
      <Image src={src} alt={`${name} logo`} className={className} />
    </figure>
  );
}
