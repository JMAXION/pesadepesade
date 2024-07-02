import React from "react";
import "../css/home.css";
import HomeCarousel from "../components/home/HomeCarousel";

export default function Home() {
  return (
    <div className="home-content">
      <HomeCarousel />
      <div className="home-follow-insta">
        <h3 className="home-follow-instagram">Follow us instagram <br></br>
        <a href="https://instagram.com/pesade_official" target="_blank">@pesade_official</a></h3>
      </div>
    </div>
  );
}
