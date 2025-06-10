import React from "react";

const PPGallery = () => {
  return (
    <>
      <div className="gallery-container" style={{ padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Local Video Container - Bison Burger */}
          <div
            style={{
              flex: "1 1 500px",
              maxWidth: "600px",
              backgroundColor: "rgba(20, 20, 20, 0.85)",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
              borderRadius: "12px",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "orange",
                fontFamily: "RubikDirt",
                fontWeight: "100",
                fontSize: "30px",
                marginBottom: "2rem",
                margin: "0 auto",
              }}
            >
              Homemade Bison Burger
            </h2>
            <video
              controls
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 0 12px rgba(255,255,255,0.3)",
              }}
            >
              <source
                src={`${process.env.PUBLIC_URL}/Burgers480.webm`}
                type="video/webm"
                aria-label="Bison Burger Tutorial Video Local Storage on Website"
              />
              Your browser does not support the video tag.
            </video>
          </div>
{/* Duplicate Title Only Above Audio Player */}
<div
  style={{
    flex: "1 1 500px",
    maxWidth: "600px",
    backgroundColor: "rgba(20, 20, 20, 0.85)",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
    borderRadius: "12px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "orange",
    fontFamily: "RubikDirt",
    fontWeight: "100",
    fontSize: "30px",
  }}
>
  <div style={{ marginBottom: "1.5rem", fontWeight: "100", fontSize: "30px" }}>
    Video External Links
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      flexWrap: "wrap",
      width: "100%",
    }}
  >
    <a
      href="https://www.amazon.com/Taylor-Sheridans-Original-Cowboy-Seasoning/dp/B0CZQG2RK6"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "orange",
        color: "black",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: "500",
        fontSize: "16px",
        cursor: "pointer",
        userSelect: "none",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffb347")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "orange")}
    >
      Seasoning
    </a>
    <a
      href="https://www.amazon.com/Shape-Store-Innovative-Container-10-Patty/dp/B00XHI1ACO/ref=sr_1_7?sr=8-7"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "orange",
        color: "black",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: "500",
        fontSize: "16px",
        cursor: "pointer",
        userSelect: "none",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffb347")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "orange")}
    >
      Shaper
    </a>
    <a
      href="https://www.amazon.com/Vegetable-Chopper-Container-Microplane-Essentials/dp/B0BQCSGC64/ref=asc_df_B0BQCSGC64?tag=bingshoppinga-20&linkCode=df0&hvadid=80470697127931&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584070168118301&psc=1"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "orange",
        color: "black",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: "500",
        fontSize: "16px",
        cursor: "pointer",
        userSelect: "none",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffb347")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "orange")}
    >
      Chopper
    </a>
     <a
      href="https://drive.google.com/drive/folders/1DQjPbXjtkeumbIjL3YNPD-d0JX2gAsvS?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "orange",
        color: "black",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: "500",
        fontSize: "16px",
        cursor: "pointer",
        userSelect: "none",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffb347")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "orange")}
    >
      .PPTX Download
    </a>
  </div>
</div>


          {/* Local Audio Player Container */}
          <div
            style={{
              flex: "1 1 500px",
              maxWidth: "600px",
              backgroundColor: "rgba(20, 20, 20, 0.85)",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
              borderRadius: "12px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "orange",
                fontFamily: "RubikDirt",
                fontWeight: "100",
                fontSize: "30px",
                marginBottom: "2rem", // spacing below text
              }}
            >
              Fresh Pasta Tutorial Audio
            </h3>
            <audio controls style={{ width: "100%" }}>
              <source
                src={`${process.env.PUBLIC_URL}/PastaTutorialAudio.mp3`}
                type="audio/mp3"
                aria-label="Audio Tutorial for Pasta Making"
              />
              Your browser does not support the audio element.
            </audio>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default PPGallery;
