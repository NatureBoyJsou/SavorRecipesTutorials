import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";



const images = [
   "./FoodImage1.jpg",
  "./FoodImage2.jpg",
  "./FoodImage3.jpg",
 
];

const PowerpointGallery = () => {
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="ppgallery-container" {...swipeHandlers}>
      <h2 style={{ textAlign: "center", color: "white", marginBottom: "1rem" }}>
        This is a Placeholder for My PowerPoint.
      </h2>
      <img src={images[index]} alt={`Dish ${index + 1}`} className="gallery-image" />
      <div className="ppgallery-controls">
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

export default PowerpointGallery;
