import React from "react";

const Banner = ({ title, subtitle }) => (
  <section className="banner">
    {/* 🔹 Background Video */}
    <video
      autoPlay
      muted
      loop
      preload="auto"
      playsInline
      className="banner-video"
      aria-label="Burger flipping video in the background"
      zIndex="-10"
    >
        <source src={`${process.env.PUBLIC_URL}/BGPan.webm`} type="video/webm" />

      Your browser does not support the video tag.
    </video>

    {/* 🔹 Overlay Text & Blocks */}
    <div className="banner-content">
      <h1>{title}</h1>
    </div>
  </section>
);

export default Banner;
