import React from "react";

const Banner = ({ title, subtitle }) => (
  <section className="banner">
    {/* 🔹 Background Video (YouTube Embed) */}
    <div className="banner-video">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/g2CNnXlAaiQ?si=HzVM9Yrq9QQaj50c"
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>

    {/* 🔹 Overlay Text & Blocks */}
    <div className="banner-content">
      <h1>{title}</h1>
    </div>
  </section>
);

export default Banner;
