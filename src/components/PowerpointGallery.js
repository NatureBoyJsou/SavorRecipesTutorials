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

      {/* Responsive YouTube video embed */}
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          maxWidth: "1280px",
          margin: "0 auto",
          borderRadius: "12px",
          boxShadow: "0 0 12px rgba(255,255,255,0.3)",
        }}
      >
        <iframe
          title="YouTube video player"
          src="https://www.youtube.com/embed/N-8I0gEOvjE?si=_wOKndDFJGhaElCP"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default PPGallery;
