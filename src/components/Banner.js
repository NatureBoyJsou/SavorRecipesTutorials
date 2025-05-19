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
    >
      <source src={`${process.env.PUBLIC_URL}/BGPan.mp4`} type="video/mp4" />

      Your browser does not support the video tag.
    </video>

    {/* 🔹 Overlay Text & Blocks */}
    <div className="banner-content">
      <h1>{title}</h1>
    </div>
  </section>
);

export default Banner;
