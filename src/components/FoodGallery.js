import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const images = [
  {
    src: process.env.PUBLIC_URL + "/Breakfast.png",
    alt: "Oats Eggs and Banana on a Plate"
  },

  {
    src: process.env.PUBLIC_URL + "/AMSnack.png",
    alt: "Protein Shake on a Plate"
  },

  {
    src: process.env.PUBLIC_URL + "/Lunch.png",
    alt: "Chicken Breast and Apple on a Plate"
  },

  {
    src: process.env.PUBLIC_URL + "/PMSnack.png",
    alt: "Green Shake on a Plate"
  },

   {
    src: process.env.PUBLIC_URL + "/BeefSirloin.png",
    alt: "Beef Sirloin and Green Beans on a Plate"
  }
];

const FoodGallery = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="gallery-container" {...swipeHandlers}>
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={image.alt}
            className="slider-image"
          />
        ))}
      </div>
      <div className="gallery-controls">
        <button onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}>
          ⬅
        </button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={() => setIndex((prev) => (prev + 1) % images.length)}>
          ➡
        </button>
      </div>
    </div>
  );
};

export default FoodGallery;
