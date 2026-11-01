import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";

function Navbar({ cartCount }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();

    if (filteredProducts.length > 0) {
      navigate(`/product/${filteredProducts[0].id}`);
      setSearchOpen(false);
      setSearchTerm("");
    }
  };

  const openProduct = (id) => {
    navigate(`/product/${id}`);
    setSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <nav className="vilora-navbar">

      <Link to="/" className="vilora-logo">
        VILORA
        <span>THE ART OF MODESTY</span>
      </Link>

      <div className="vilora-nav-links">
        <Link to="/">Home</Link>
        <a href="/#collections">Collections</a>
        <a href="/#new-arrivals">New Arrivals</a>
        <a href="/#about">Our Story</a>
      </div>

      <div className="vilora-nav-actions">

        <button
          className="nav-action"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Open search"
        >
          ⌕
        </button>

        <button className="nav-action" aria-label="Wishlist">
          ♡
        </button>

        <Link to="/cart" className="vilora-bag">
          BAG <span>{cartCount || 0}</span>
        </Link>

      </div>

      {searchOpen && (
        <div className="vilora-search-panel">

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search your favourite style..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />

            <button type="button" onClick={() => {
              setSearchOpen(false);
              setSearchTerm("");
            }}>
              ✕
            </button>
          </form>

          {searchTerm.trim() !== "" && (
            <div className="vilora-search-results">

              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => openProduct(product.id)}
                    className="vilora-search-item"
                  >
                    <img src={product.image} alt={product.name} />

                    <div>
                      <h4>{product.name}</h4>
                      <p>Rs. {product.price.toLocaleString("en-PK")}</p>
                    </div>
                  </button>
                ))
              ) : (
                <p className="no-search-result">
                  No products found.
                </p>
              )}

            </div>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;