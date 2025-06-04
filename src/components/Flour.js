import React from "react";

const Flour = ({ title, subtitle }) => (
  <section className="banner">
    {/* 🔹 Background Video */}
    <video
      autoPlay
      muted
      loop
      preload="auto"
      playsInline
      className="banner-video"
      aria-label="Video of Chopping Onions"
      zIndex="-10"
    >
    <source src={`${process.env.PUBLIC_URL}/Flour.webm`} type="video/webm" />

      Your browser does not support the video tag.
    </video>

    {/* 🔹 Overlay Text & Blocks */}
    <div className="banner-content">
      <h1>{title}</h1>
    </div>
  </section>
);

export default Flour;
