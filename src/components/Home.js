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
            This is Savor. A Curated Collection of Recipes, Cooking Tutorials and Resources to Promote Healthy Eating and a Healthy Lifestyle! 
         
          </p>
        </div>

<div className="content-box">
  <div className="content-box-inner">
    <div className="content-box-front">
      <h2>What Are the Benefits to Cooking From Scratch?</h2>
    </div>
    <div className="content-box-back">
      <p>🍽️ Control Over Ingredients</p>
      <p>✅ Fresher, Healthier Meals</p>
      <p>🌿 Avoid Preservatives & Chemicals</p>
      <p>👨‍🍳 More Enjoyable Cooking Experience</p>
    </div>
  </div>
</div>

<div className="content-box">
  <div className="content-box-inner">
    <div className="content-box-front">
      <h2>What Are Some Surefire Ways to Lose Weight?</h2>
    </div>
    <div className="content-box-back">
      <p>🍽️ Burn More Calories Than You Consume</p>
      <p>🥩 Increase Protein, Decrease Fats & Carbs</p>
      <p>🏋️‍♂️ Excercise, But Don't Overtrain</p>
      <p>💧 Drink Lots of Water</p>
    </div>
  </div>
</div>

<div className="content-box">
  <div className="content-box-inner">
    <div className="content-box-front">
      <h2>For Adults, How Many Calories Per Day Should I Be Consuming?</h2>
    </div>
    <div className="content-box-back">
      <p>🍽️ Adult Males 19-30: 1800-2400 Calories</p>
      <p>🍽️ Adult Females 19-30: 2400-3000 Calories</p>
      <p>🍽️ Adult Males 31-59: 2200-3000 Calories</p>
      <p>🍽️ Adult Females 31-59: 1600-2200 Calories</p>
    </div>
  </div>
</div>

<div className="content-box">
  <div className="content-box-inner">
    <div className="content-box-front">
      <h2>Does it Matter How Far My Food Travels?</h2>
    </div>
    <div className="content-box-back">
      <p>🚚 In the US, food is shipped an average of 1,500 miles before being sold to the consumer</p>
      <p>🍈 Food that travels longer distances tends to lose nutritional value and freshness</p>
      <p>🧪 Food Prepped For Travel Often Contains Additional Chemicals/Preservatives</p>
    </div>
  </div>
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
            zIndex: "0",
            marginBottom: "-800px",
            marginTop: "50px",
            
          }}
        >
          <source src={`${process.env.PUBLIC_URL}/Seafood.webm`} type="video/webm" />
          Your browser does not support the video tag.
        </video>

      </div>
          <ContactForm />
{/* Info Box */}
<div
  style={{
    maxWidth: "600px",
    margin: "2rem auto",
    backgroundColor: "rgba(20, 20, 20, 0.85)",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
    borderRadius: "12px",
    padding: "0rem",
    color: "orange",
    fontFamily: "RubikDirt",
    fontWeight: "100",
    fontSize: "20px",
    textAlign: "center",
    zIndex: 2,
    position: "relative",
  }}
>
   Audio Music: Royalty Free Pixabay
  <br /> BG Videos: MS Clipchamp
  <br /> Slideshow Images Designed With Canva 
  <br /> 3D Utensils: Royalty Free CG Trader
 
 

</div>

    </div>
    
  );
};

export default Home;
