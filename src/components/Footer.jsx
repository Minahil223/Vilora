
function Footer() {
  return (
    <footer className="footer" id="about">

      <div className="footer-brand">
        <h2>VILORA</h2>
        <p>Elegance in Every Layer.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>EXPLORE</h4>
          <a href="/">Home</a>
          <a href="#collections">Collections</a>
          <a href="#new-arrivals">New Arrivals</a>
        </div>

        <div>
          <h4>HELP</h4>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#shipping">Shipping Policy</a>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://pinterest.com">Pinterest</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 VILORA. ALL RIGHTS RESERVED.
      </div>

    </footer>
  );
}

export default Footer;