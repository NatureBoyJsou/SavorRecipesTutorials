import React, { useState } from "react";
import Header from "./Header";
import PastaViewer from "./PastaViewer";
import PoultryViewer from "./PoultryViewer";
import FishViewer from "./FishViewer";
import ContactForm from "./ContactForm";
import OnionChop from "./OnionVid";
import FoodQuiz from "./FoodQuiz";
import SteakViewer from "./SteakViewer";

const NavBarItems = [
  { name: "Home", link: "/", type: "link" },
  { name: "Recipes", link: "/recipes", type: "link" },
  { name: "Nutritional App", link: "/nutritional-app", type: "link" },
  { name: "Cooking Tutorials", link: "/cooking-tutorials", type: "link" },
];

const Recipes = () => {
  const [activeModel, setActiveModel] = useState(null); // grains | poultry | seafood

  const handleGrainsSelect = () => setActiveModel("grains");
  const handlePoultrySelect = () => setActiveModel("poultry");
  const handleSeafoodSelect = () => setActiveModel("seafood");
  const handleMeatSelect = () => setActiveModel("meat");

  return (
    <div className="Recipes">
      <Header restaurantName="Recipes" menuItems={NavBarItems} />

      <section className="content-section">
        <div className="full-width-box">
          <h1>Recipes</h1>
        </div>

        <div className="full-width-box">
          <h1 style={{ fontSize: "2rem" }}>These Are Some Great Ad-Free Recipe Websites</h1>

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

        {/* Food Quiz */}
        <div className="full-width-box">
          <FoodQuiz
            onGrainsSelect={handleGrainsSelect}
            onPoultrySelect={handlePoultrySelect}
            onSeafoodSelect={handleSeafoodSelect} 
            onMeatSelect={handleMeatSelect}
          />
        </div>

        {/* Conditionally render only one model */}
        {activeModel === "grains" && <PastaViewer />}
        {activeModel === "poultry" && <PoultryViewer />}
        {activeModel === "seafood" && <FishViewer />} 
        {activeModel === "meat" && <SteakViewer />} 

        <ContactForm />
      </section>

      <OnionChop />
    </div>
  );
};

export default Recipes;
