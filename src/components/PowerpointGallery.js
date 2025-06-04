import React from "react";

const PPGallery = () => {
  return (
    <div className="gallery-container" style={{ padding: "2rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "RubikDirt",
          fontWeight: "100",
          marginBottom: "1rem",
        }}
      >
        This is a Placeholder for My Powerpoint Assignment.
      </h2>

      {/* Local video instead of embedded Slides */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <video
          controls
          style={{
            width: "90%",
            maxWidth: "1280px", // stretch up to this limit
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 0 12px rgba(255,255,255,0.3)",
          }}
        >
          <source
            src={`${process.env.PUBLIC_URL}/BurgerCookingTutorial.webm`}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PPGallery;
