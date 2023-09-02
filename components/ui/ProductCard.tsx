import "./product-card.css";

export default function ProductCard(): React.ReactElement {
  return (
    <article className="product-card">
      <img src="https://cdn.oceansapart.com/it/wp-content/uploads/sites/7/2023/08/45388-black-swirl_91-830x1070.jpg" />
      <div className="details">
        <header>
          <h3> Gianna Sweat Set Deluxe - Burnt Orange</h3>
        </header>
        <div className="price">
          <span className="actual">95€</span>
          <span className="old">
            <del>120€</del>
          </span>
        </div>
      </div>
    </article>
  );
}
