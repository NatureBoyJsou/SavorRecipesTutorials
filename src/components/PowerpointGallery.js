import React from "react";

const PPGallery = () => {
  return (
    <div className="gallery-container">
      <h2 style={{
        textAlign: "center",
        color: "white",
        fontFamily: "RubikDirt",
        fontWeight: "100",
        marginBottom: "1rem"
      }}>
        This is a Placeholder for My Powerpoint Assignment.
      </h2>

      {/* Embedded Google Slides iframe */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRk7Y1gc6cXyTqtRQawgaDfKSfFPgDhFrbxvdsyRBCrU7o7FCY75zd-lhMezoZOTen8z6fmtplUl0l4/pubembed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen
          title="PowerPoint Presentation"
        ></iframe>
      </div>
    </div>
  );
};

export default PPGallery;
