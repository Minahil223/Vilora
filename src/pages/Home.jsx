import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import OurStory from "../components/OurStory";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Home() {
  const { cartCount, addToCart } = useCart();

  return (
    <>
      <AnnouncementBar />

      <Navbar cartCount={cartCount} />

      <HeroSection />

      <CategorySection />

      <ProductGrid onAddToCart={addToCart} />

      <OurStory />

      <Newsletter />

      <Footer />
    </>
  );
}

export default Home;