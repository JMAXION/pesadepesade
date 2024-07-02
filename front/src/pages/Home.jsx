import React from "react";
import "../css/home.css";
import HomeCarousel from "../components/home/HomeCarousel";

export default function Home() {
  return (
    <div className="home-content">
      <HomeCarousel />
      <div><img src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/05/30/2c5cc1424b68aa5682707f336a469561.jpg"
       alt="메인 이미지" 
       className="home-sub-img"/></div>
      <div className="home-follow-insta">
        <h3 className="home-follow-instagram">Follow us instagram <br></br>
        <a href="https://instagram.com/pesade_official" target="_blank">@pesade_official</a></h3>
      </div>
    </div>
  );
}
