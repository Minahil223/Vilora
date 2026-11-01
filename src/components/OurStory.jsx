import { useEffect, useRef } from "react";

function OurStory() {
  const storyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("story-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="our-story" id="about">
      <div className="story-content" ref={storyRef}>
        <p className="story-label">GET TO KNOW US</p>

        <h2>
          Our Story
          <span>Where Elegance Meets Modesty</span>
        </h2>

        <div className="story-line"></div>

        <p className="story-paragraph">
          Vilora was born from a simple belief: modesty and modern fashion
          can beautifully exist together.

          Inspired by timeless elegance and the beauty of simplicity,
          we bring thoughtfully designed pieces that celebrate grace,
          confidence and individuality.

          Every detail tells a story. Every piece reflects who we are.
        </p>

        <p className="story-signature">
          VILORA <span>— Elegance in Every Layer</span>
        </p>
      </div>
    </section>
  );
}

export default OurStory;