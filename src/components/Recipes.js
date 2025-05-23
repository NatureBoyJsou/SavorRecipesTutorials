import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Banner from "./Banner";
import FoodGallery from "./FoodGallery";
import Header from "./Header";
import ModelViewer from "./ModelViewer";
import ContactForm from "./ContactForm";



const NavBarItems = [
  { name: "Home", link: "/", type: "link" },
  { name: "Recipes", link: "/recipes", type: "link" },
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

const Recipes = () => {
  return (
    <div className="Recipes">
      <Header restaurantName="Recipes" menuItems={NavBarItems} />

      {/* Content Section */}
      <section className="content-section">
        <div className="full-width-box">
          <h1>Recipes</h1>
          <p></p>
        </div>

      
<div className="full-width-box">
  <h1 style={{ fontSize: "2rem" }}>External Links to My Favorites!</h1>

  <h2 style={{ fontSize: "1.5rem", fontWeight: "100" }}>
    <a
      href="https://www.seriouseats.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#FFD700", textDecoration: "underline" }}
    >
      https://www.seriouseats.com/
    </a>
  </h2>

  <h2 style={{ fontSize: "1.5rem", fontWeight: "100" }}>
    <a
      href="https://www.101cookbooks.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#FFD700", textDecoration: "underline" }}
    >
      https://www.101cookbooks.com/
    </a>
  </h2>
  
  

  <h2 style={{ fontSize: "1.5rem", fontWeight: "100" }}>
    <a
      href="https://minimalistbaker.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#FFD700", textDecoration: "underline" }}
    >
      https://minimalistbaker.com/
    </a>
  </h2>
</div>

        {/* Recipes Image */}
        <div className="full-width-box">
          <img 
            src={process.env.PUBLIC_URL + "/recipes.jpg"} 
            alt="Recipes Image" 
            style={{ width: "50%", borderRadius: "12px" }} 
          />
        </div>
    


      {/* Model Viewer Box */}
<div className="full-width-box">
  <h2 style={{ color: "white", fontWeight: "100" }}>3D Recipe CardsPlaceholder</h2>
  <ModelViewer />
</div>

    
          <ContactForm />




      </section>

      <Banner />
      
    

    </div>

    
  );
};

export default Recipes;
