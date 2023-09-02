import "./footer-menu-list.css";

interface FooterMenuListProps {
  menu: any;
  row?: boolean;
}

export default function FooterMenuList(
  props: FooterMenuListProps
): React.ReactElement {
  function mapItems(item: any) {
    return (
      <li key={item.id}>
        <a href={item.href}>{item.anchor}</a>
      </li>
    );
  }

  return (
    <nav className={`footer-menu-list${props.row ? " row" : ""}`}>
      <div className="title">{props.menu.title}</div>
      <ul>{props.menu.items.map(mapItems)}</ul>
    </nav>
  );
}
