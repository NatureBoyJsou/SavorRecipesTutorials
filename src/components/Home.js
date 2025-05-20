import React from "react";
import Banner from "./Banner";
import FoodGallery from "./FoodGallery";
import Header from "./Header";
import '../styles.css';
import ContactForm from "./ContactForm";

const NavBarItems = [
  { name: "Home", link: "/", type: "link" },
  { name: "Recipes", link: "/recipes", type: "link" },
  { name: "Nutritional App", link: "/nutritional-app", type: "link" },
  { name: "Cooking Tutorials", link: "/cooking-tutorials", type: "link" }
];

const Home = () => {
  return (
    <div className="Home">
      <Header restaurantName="Savor Home" menuItems={NavBarItems} />

      {/* Main content section */}
      <section className="content-section">
        <div className="full-width-box">
          <h1>We're Glad You're Here!</h1>
          <p>
            Welcome to Savor. A Curated Collection of Recipes, Cooking Tutorials and Resources to Promote Healthy Eating and a Healthy Lifestyle!
          </p>
        </div>

        <div className="content-box">
          <h2>Fresh Ingredients</h2>
          <p>These Cards Will Flip Revealing Recipes & Ingredients</p>
        </div>

        <div className="content-box">
          <h2>Locally Sourced</h2>
          <p>These Cards Will Flip Revealing Recipes & Ingredients</p>
        </div>

        <div className="content-box">
          <h2>Mobile App</h2>
          <p>These Cards Will Flip Revealing Recipes & Ingredients</p>
        </div>
      </section>

      <Banner />

      <div className="content-box1">
        <FoodGallery />
      </div>

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
            marginTop: "50px",
            
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

export default Home;
