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

const NutritionalApp = () => {
  return (
    <div className="NutritionalApp">
      <Header restaurantName="Nutritional App" menuItems={NavBarItems} />

      {/* Top Content Box */}
      <section className="content-section">
        <div className="full-width-box">
          <h1>Nutritional App</h1>
        </div>

        {/* QR Code Box */}
        <div className="full-width-box">
          <img 
            src={process.env.PUBLIC_URL + "/AppQRCodes.png"} 
            alt="QR Codes" 
            style={{ width: "80%", borderRadius: "12px" }} 
          />
        </div>
      </section>

      <Banner />



     {/* Video Section with Overlay */}
      <div className="secondary-video-wrapper" style={{ position: "relative", height: "800px", marginTop: "-20px", marginBottom: "-800px", overflow: "visible" }}>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          crossOrigin="anonymous"
          className="secondary-banner-video"
          aria-label="Seafood Salting Video"
          
          style={{
            width: "100%",
            height: "100%",
            height: "1000px",
            objectFit: "cover",
            position: "relative",
            zIndex: "auto",
            marginBottom: "-800px",
            marginTop: "-400px",
            
          }}
        >
          <source src={`${process.env.PUBLIC_URL}/Seafood.webm`} type="video/webm" />
          Your browser does not support the video tag.
        </video>


    
      </div>
          <ContactForm />







    </div>
  );
};


export default NutritionalApp;
