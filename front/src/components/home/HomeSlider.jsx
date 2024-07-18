import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery"; // jQuery import
import "jquery.ripples"; // jQuery 플러그인 import
import { Link } from "react-router-dom";

const SimpleSlider = () => {
  const [products, setProducts] = useState([]);
  const sliderWrapperRef = useRef(null);
  const parfumNumber = [27,28,29,30,31,32] //pesade Number 27~32
  useEffect(() => {
    if (sliderWrapperRef.current) {
      $(sliderWrapperRef.current).ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
      });
    }

    return () => {
      if (sliderWrapperRef.current) {
        $(sliderWrapperRef.current).ripples("destroy");
      }
    };
  }, [sliderWrapperRef]);
  
  const url = `http://127.0.0.1:8080/product`;
  useEffect(() => {
    axios({
      method:'POST',
      url:url,
      data:{type:'all'}
    }).then(result => {
      const filteredProducts = result.data.filter(item => parfumNumber.includes(item.pid));
        setProducts(filteredProducts);
     
    })
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // 화살표 보이기
    prevArrow: <CustomPrevArrow />, // 이전 화살표 컴포넌트 설정
    nextArrow: <CustomNextArrow />, // 다음 화살표 컴포넌트 설정
  };

  return (
    <div className="slider-wrapper " ref={sliderWrapperRef} >
      <Slider {...settings} className="ripple-effect">
        {products.map(product => (
          <div key={product.pid}>
            <Link to={`/shop/detail/${product.pid}`}>
            <div className="image-container ripple"  >
              <img src={`http://127.0.0.1:8080/${product.pimage}`} alt={product.name} />
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom previous arrow component
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    >
      이전
    </div>
  );
};

// Custom next arrow component
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    >
      다음
    </div>
  );
};

export default SimpleSlider;
