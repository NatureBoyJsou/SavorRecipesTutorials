import React from "react";
import Banner from "./Banner";
import FoodGallery from "./FoodGallery";
import Header from "./Header";
import "./styles.css";

const NavBarItems = [
  { name: "Home", link: "/", type: "link" },
  { name: "Nutritional App", link: "/nutritional-app", type: "link" },
  { name: "Cooking Tutorials", link: "/cooking-tutorials", type: "link" }
];


const Home = () => {
  return (
    <div className="Home">
      <Header
        restaurantName="Savor: Recipes & More!"
        menuItems={NavBarItems}
      />

      {/* Content Section */}
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

        <div className="content-box">
          <h2>Recipe Database</h2>
          <p>These Cards Will Flip Revealing Recipes & Ingredients</p>
        </div>
      </section>

      <Banner />

      <div className="content-box1">
        <FoodGallery />
      </div>


{/* Video Below Food Recommender with Overlay Content Box */}
<div
  className="secondary-video-wrapper"
  style={{
    position: "relative",
    height: "800px",           // container height
    marginBottom: "-800px",    // pull content below up to align bottom
    overflow: "visible",
    marginTop: "-20px",       // pull container upward to stretch more on top
    
  }}
>
  <video
    autoPlay
    muted
    loop
    preload="auto"
    playsInline
    className="secondary-banner-video"
    style={{
      width: "100%",
      height: "100%",          // fill wrapper vertically
      objectFit: "cover",     // scale nicely without distortion
      position: "relative",
      zIndex: 1,
    }}
  >
    <source src={`${process.env.PUBLIC_URL}/Seafood.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div
    className="video-overlay-content"
    style={{
  position: "absolute",
  top: "15%",
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "orange",
  fontFamily: "RubikDirt",
  fontWeight: "1",
  padding: "2rem",
  zIndex: 2,
  fontSize: "3rem",
  
  textAlign: "center",
  userSelect: "none",
    }}
  >
    Last Updated:<br />
    <span style={{ fontSize: "4rem", color: "#FFD700", fontFamily: "RubikDirt", fontWeight: "100", }}>
      {new Date("2025-05-20T11:00:00Z").toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </span>
  </div>
</div>




    </div>
  );
};

export default Home;
