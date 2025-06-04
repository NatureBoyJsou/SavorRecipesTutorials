import React from "react";

const PPGallery = () => {
  return (
    <div className="gallery-container" style={{ padding: "2rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "Orange",
          fontFamily: "RubikDirt",
          fontWeight: "100",
          marginBottom: "1rem",
        }}
      >
        Hommeade Bison Burger Cooking Tutorial.
      </h2>

      {/* Local video instead of embedded Slides */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1280px",
          margin: "0 auto",
          borderRadius: "12px",
          boxShadow: "0 0 12px rgba(255,255,255,0.3)",
        }}
      >
        <video
          controls
          style={{
            width: "90%",
            height: "auto",
            borderRadius: "12px",
          }}
        >
          <source
            src={`${process.env.PUBLIC_URL}/Burgers480.webm`}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PPGallery;
