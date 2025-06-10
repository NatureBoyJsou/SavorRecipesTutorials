import React from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";
import AppVid from "./AppVid";

const NavBarItems = [
  { name: "Home", link: "/", type: "link" },
  { name: "Recipes", link: "/recipes", type: "link" },
  { name: "Nutritional App", link: "/nutritional-app", type: "link" },
  { name: "Cooking Tutorials", link: "/cooking-tutorials", type: "link" }
];

const NutritionalApp = () => {
  return (
    <div className="NutritionalApp" style={{ position: "relative", zIndex: 0 }}>
      {/* Content Wrapper */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Header restaurantName="Nutritional App" menuItems={NavBarItems} />

        {/* Top Banner */}
<section className="content-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
  {/* Top Banner */}
  <div className="full-width-box" style={{ zIndex: 2, position: "relative" }}>
    <h1>Track and Count Your Meals!</h1>
  </div>

  {/* YouTube Embed */}
  <div
    style={{
      maxWidth: "720px",
      width: '100%',
      backgroundColor: "rgba(20, 20, 20, 0.85)",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
      borderRadius: "12px",
      padding: "1rem",
      textAlign: "center",
      zIndex: 2,
      position: "relative",
    }}
  >
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/fdAwzVvY84g?si=fW81VDGGaljLJpru"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ borderRadius: "8px" }}
      aria-label="Youtube Player for Nutritional App Promo"
    ></iframe>
  </div>

  {/* Info Box */}
  <div
    style={{
      maxWidth: "600px",
      width: '100%',
      backgroundColor: "rgba(20, 20, 20, 0.85)",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
      borderRadius: "12px",
      padding: "1.5rem",
      color: "orange",
      fontFamily: "RubikDirt",
      fontWeight: "100",
      fontSize: "24px",
      textAlign: "center",
      zIndex: 2,
      position: "relative",
    }}
  >
    Protein Intake Calculator App <br />
    <br /> 📃 Nutritional References 📃
    <br /> 🍇 14,000 Food and Drinks 🍇
    <br /> 🍽️ Log Your Daily Meals 🍽️
    <br /> 🚫 No Ads or Intrusion 🚫
    <br /> 🧮 Macro Calculator 🧮
  </div>

  {/* Download Buttons */}
  <div
    style={{
      maxWidth: "600px",
      width: '100%',
      backgroundColor: "rgba(20, 20, 20, 0.85)",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
      borderRadius: "12px",
      padding: "2rem",
      color: "orange",
      fontFamily: "RubikDirt",
      fontWeight: "100",
      fontSize: "22px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
      position: "relative",
      zIndex: 2,
    }}
  >
    <div>📥 Download Links 📥</div>

    <button
      style={{
        backgroundColor: "orange",
        color: "black",
        padding: "0.75rem 1.5rem",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: "100",
        fontFamily: "RubikDirt",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        boxShadow: "0 4px 10px rgba(255, 165, 0, 0.4)",
      }}
      onClick={() =>
        window.open(
          "https://apps.powerapps.com/play/e/default-bb932f15-ef38-42ba-91fc-f3c59d5dd1f1/a/39c7be3a-27a2-40a4-b9cd-6bfdf1d92048?tenantId=bb932f15-ef38-42ba-91fc-f3c59d5dd1f1&sourcetime=1749071435085",
          "_blank"
        )
      }
    >
      UCF Students Can Get It Here
    </button>

    <button
      style={{
        backgroundColor: "orange",
        color: "black",
        padding: "0.75rem 1.5rem",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: "100",
        fontFamily: "RubikDirt",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        boxShadow: "0 4px 10px rgba(255, 165, 0, 0.4)",
      }}
      onClick={() =>
        window.open(
          "https://github.com/NatureBoyJsou/Nutrition-Mobile-App-Power-Apps",
          "_blank"
        )
      }
    >
      Everyone Else Can Get It Here
    </button>
  </div>

  {/* Contact Form */}
  <ContactForm style={{ maxWidth: "600px", width: "100%", marginTop: "2rem" }} />
</section>

      </div>

      {/* App Video as Background */}
      <AppVid />
    </div>
  );
};

export default NutritionalApp;
