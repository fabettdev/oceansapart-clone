import Button from "./Button";
import "./category-card.css";

export default function CategoryCard(): React.ReactElement {
  return (
    <article className="category-card">
      <img src="https://cdn.oceansapart.com/it/wp-content/uploads/sites/7/2023/08/45388-black-swirl_91-830x1070.jpg" />
      <div className="cta">
        <Button label="Costumi da bagno" href={"/ciao"} className="big white" />
      </div>
    </article>
  );
}
