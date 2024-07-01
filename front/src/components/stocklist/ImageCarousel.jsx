import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import "../../css/stocklist.css";
import "../../css/slider/slick-theme.css";
import "../../css/slider/slick.css";
import "../../css/slider/HomeSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="nextArrow">
      <FontAwesomeIcon icon={faChevronRight} onClick={onClick} />
    </div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="prevArrow">
      <FontAwesomeIcon icon={faChevronLeft} onClick={onClick} />
    </div>
  );
};

export default class ImageCarousel extends Component {
  render() {
    const settings = {
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "2px",
      initialSlide: 1,
    };
    return (
      <div>
        <div className="ImageCarousel-slider">
          <Slider {...settings}>
            <div className="inner-slide">
              <img
                src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/6d33f19990138afaf4e9447fb39c0bf5.jpeg"
                className="sub-carousel-img"
              />
            </div>
            <div className="inner-slide">
              <img
                src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/4dcd04f607a5f214e40e4c83e38700fd.jpeg"
                className="sub-carousel-img"
              />
            </div>
            <div className="inner-slide">
              <img
                src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/feef37f82c368f4945378fc8ecf0e330.jpeg"
                className="sub-carousel-img"
              />
            </div>
            <div className="inner-slide">
              <img
                src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/37b12550b7421d1bf1da7b29f506b75c.jpeg"
                className="sub-carousel-img"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
