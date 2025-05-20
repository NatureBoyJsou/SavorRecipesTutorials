import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

// 🔹 Updated image array with src and descriptive alt text
const images = [
  {
    src: process.env.PUBLIC_URL + "/FoodImage1.jpg",
    alt: "Bowl With Egg Fruit and Lemon"
  },
  {
    src: process.env.PUBLIC_URL + "/FoodImage2.jpg",
    alt: "Overview of the Kitchen"
  },
  {
    src: process.env.PUBLIC_URL + "/FoodImage3.jpg",
    alt: "3 Bowls With Spaghetti On the Right"
  }
];

const FoodGallery = () => {
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="gallery-container" {...swipeHandlers}>
      <h2 style={{ textAlign: "center", color: "white", fontFamily: "RubikDirt" , fontWeight: "100" , marginBottom: "1rem" }}>
        These Are Placeholder Images. They Will Be Replaced With Original Photos. Alt Tags Are Included For Each Placeholder Image.
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
    </div>
  );
};

export default FoodGallery;
