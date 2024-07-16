import React, { useEffect, useState } from "react";
import "../css/home.css";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeSlider  from '../components/home/HomeSlider'
export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desktopImages = [
    "https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/f05764580a9e7069427b19ddf9f9602b.jpg",
    "https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/0b47ea5ffdbce5300879e083bb9ce272.jpg",
    "https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/0c096dae5a1c5622a304bb467d483ee4.jpg",
  ];

  const mobileImages = [
    "https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/daaf61730c3168eb4aac585b1c26d38a.jpg",
    "https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/5145eda28b1cc0551fdb38887cd7a081.jpg",
    "https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/08b427bb5bdcd849fb95045a0daca7c2.jpg",
  ];

  const images = isMobile ? mobileImages : desktopImages;

  const desktopImages2 =
    "https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/7d3e4352abe3e449a4d06046f579fa55.jpg";
  const mobileImages2 =
    "https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/5bb901c3902a972c22b1293db90a91b3.jpg";
  const subImg = isMobile ? mobileImages2 : desktopImages2;
  return (
    <div className="home-content">
      <HomeCarousel images={images} />
      <HomeSlider/>
      <div>
        <img src={subImg} alt="메인 이미지" className="home-sub-img" />
      </div>
      <div className="home-follow-insta">
        <h3 className="home-follow-instagram">
          Follow us instagram <br></br>
          <a href="https://instagram.com/pesade_official" target="_blank">
            @pesade_official
          </a>
        </h3>
      </div>
    </div>
  );
}
