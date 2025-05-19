import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Banner from "./Banner";
import FoodGallery from "./FoodGallery";
import Header from "./Header";
import ModelViewer from "./ModelViewer";

const NavBarItems = [
  { name: "Home", link: "/", type: "link" },
  { name: "Nutritional App", link: "/nutritional-app", type: "link" },
  { name: "Cooking Tutorials", link: "/cooking-tutorials", type: "link" }
];

const images = [
  "./FoodImage1.jpg",
  "./FoodImage2.jpg",
  "./FoodImage3.jpg"
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
    <div className="gallery-container" {...swipeHandlers}>
      <h2 style={{ textAlign: "center", color: "yellow", marginBottom: "1rem" }}>
        This is a Placeholder for My PowerPoint.
      </h2>
      <img src={images[index]} alt={`Dish ${index + 1}`} className="gallery-image" />
      <div className="gallery-controls">
        <button onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}>⬅</button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={() => setIndex((prev) => (prev + 1) % images.length)}>➡</button>
      </div>
    </div>
  );
};

const CookingTutorials = () => {
  return (
    <div className="CookingTutorials">
      <Header restaurantName="Cooking Tutorials" menuItems={NavBarItems} />

      {/* Content Section */}
      <section className="content-section">
        <div className="full-width-box">
          <h1>Cooking Tutorials</h1>
          <p></p>
        </div>
      </section>

      <Banner />
      
      <div className="PowerpointGallery">
        <PowerpointGallery />
      </div>


    </div>
  );
};

export default CookingTutorials;
