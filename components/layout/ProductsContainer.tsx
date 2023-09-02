import "./products-container.css";

interface ProductsContainerProps {
  children: React.ReactNode;
}

export default function ProductsContainer(
  props: ProductsContainerProps
): React.ReactElement {
  return <div className={"products-container"}>{props.children}</div>;
}
