
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Summer Collection",
    subtitle: "Lightness in every detail",
    image: "/summer-01.jpg",
    path: "/collections/summer"
  },
  {
    name: "Winter Collection",
    subtitle: "Elegance meets comfort",
    image: "/winter-01.jpg",
    path: "/collections/winter"
  },
  {
    name: "Autumn Collection",
    subtitle: "A season of timeless beauty",
    image: "/autumn-01.jpg",
    path: "/collections/autumn"
  }
];

function CategorySection() {
  return (
    <section className="category-section" id="collections">

      <div className="section-heading">
        <p>DISCOVER VILORA</p>
        <h2>Explore Our Collections</h2>
        <span>Thoughtfully curated for every season.</span>
      </div>

      <div className="category-grid">

        {categories.map((category) => (
          <Link
            to={category.path}
            className="category-card"
            key={category.name}
          >

            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-overlay">
              <p>{category.subtitle}</p>
              <h3>{category.name}</h3>
              <span className="explore-link">
                EXPLORE COLLECTION →
              </span>
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;

