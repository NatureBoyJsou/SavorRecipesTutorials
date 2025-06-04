import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const images = [
  { src: process.env.PUBLIC_URL + "/Breakfast.png", alt: "Oats Eggs and Banana on a Plate" },
  { src: process.env.PUBLIC_URL + "/AMSnack.png", alt: "Protein Shake on a Plate" },
  { src: process.env.PUBLIC_URL + "/Lunch.png", alt: "Chicken Breast and Apple on a Plate" },
  { src: process.env.PUBLIC_URL + "/PMSnack.png", alt: "Green Shake on a Plate" },
  { src: process.env.PUBLIC_URL + "/BeefSirloin.png", alt: "Beef Sirloin and Green Beans on a Plate" }
];

const FoodGallery = () => {
  const [index, setIndex] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  // Auto-slide every 5 seconds if autoAdvance is true
  useEffect(() => {
    if (!autoAdvance) return; // skip setting interval if stopped

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoAdvance]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setIndex((prev) => (prev + 1) % images.length);
      setAutoAdvance(false);
    },
    onSwipedRight: () => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      setAutoAdvance(false);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoAdvance(false);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setAutoAdvance(false);
  };

  return (
    <div className="gallery-container" {...swipeHandlers}>
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, i) => (
          <img key={i} src={image.src} alt={image.alt} className="slider-image" />
        ))}
      </div>
      <div
        className="gallery-controls"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem"
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            fontSize: "2rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
          aria-label="Previous image"
        >
          ⬅
        </button>

        <span
          style={{
            fontSize: "3rem",
            color: "orange",
            fontFamily: "RubikDirt"
          }}
        >
          {index + 1} / {images.length}
        </span>

        <button
          onClick={handleNext}
          style={{
            fontSize: "2rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
          aria-label="Next image"
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default FoodGallery;
