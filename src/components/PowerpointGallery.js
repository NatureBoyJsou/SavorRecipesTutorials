import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

// 🔹 Updated image array with src and descriptive alt text
const images = [
  {
    src: process.env.PUBLIC_URL + "/PP1.png",
    alt: "Slide 1"
  },
  {
    src: process.env.PUBLIC_URL + "/PP1.png",
    alt: "Slide 2"
  },
  {
    src: process.env.PUBLIC_URL + "/PP1.png",
    alt: "Slide 3"
  }
];

const PPGallery = () => {
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="gallery-container" {...swipeHandlers}>
      <h2 style={{ textAlign: "center", color: "white", fontFamily: "RubikDirt", fontWeight: "100", marginBottom: "1rem" }}>
        Powerpoint Project Will be Displayed Here.
      </h2>
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="gallery-image"
      />
      <div className="gallery-controls">
        <button onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}>
          ⬅
        </button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={() => setIndex((prev) => (prev + 1) % images.length)}>
          ➡
        </button>
      </div>

      {/* Add download link for PP1.png */}
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <a
          href={process.env.PUBLIC_URL + "/PP1.png"} // Path to the image in the public folder
          download
          style={{
            color: "BLACK",
            backgroundColor: "Yellow",
            textDecoration: "underline",
            fontSize: "2rem",
            fontFamily: "RubikDirt",
            fontWeight: "100"
          }}
        >
          ⬇️CLICK THIS LINK TO DOWNLOAD MY PLACEHOLDER POWERPOINT AND THE NON-WEB FILE REQUIREMENT⬇️
        </a>
      </div>
    </div>
  );
};

export default PPGallery;
