import { useState, useEffect } from "react";

const slides = [
  {
    image: "/dress-04.jpg",
    eyebrow: "THE NEW COLLECTION",
    title: "Elegance Beyond",
    highlight: "Seasons.",
    description: "Discover the beauty of timeless modest fashion."
  },
  {
    image: "/dress-07.jpg",
    eyebrow: "THE ART OF MODESTY",
    title: "Redefining",
    highlight: "Elegance.",
    description: "Where contemporary fashion meets timeless grace."
  },
  {
    image: "/dress-10.jpg",
    eyebrow: "THE VILORA EDIT",
    title: "A World of",
    highlight: "Grace.",
    description: "Curated silhouettes for the modern woman."
  }
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="hero-slider">

      <div className="hero-background" key={slide.image}>
        <img src={slide.image} alt="Vilora Fashion Collection" />
      </div>

      <div className="hero-shade"></div>

      <div className="hero-editorial" key={slide.image}>

        <p className="hero-eyebrow">
          {slide.eyebrow}
        </p>

        <h1>
          {slide.title}
          <br />
          <em>{slide.highlight}</em>
        </h1>

        <p className="hero-description">
          {slide.description}
        </p>

        <a href="#new-arrivals" className="hero-btn">
          DISCOVER VILORA <span>↗</span>
        </a>

      </div>

      

      <div className="hero-brand">
        VILORA
      </div>

    </section>
  );
}

export default HeroSection;