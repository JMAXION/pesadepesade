import React, { useEffect, useState, useRef } from "react";
// import Slider from "react-slick";
import axios from 'axios';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import $ from "jquery"; // jQuery import
import "jquery.ripples"; // jQuery 플러그인 import
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";

const HomeSlider = ({isTablet, isMobile2}) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const sliderWrapperRef = useRef(null);
  const parfumNumber = [27,28,29,30,31,32] //pesade Number 27~32

  useEffect(() => {
    if (sliderWrapperRef.current) {
      $(sliderWrapperRef.current).ripples({
        resolution: 512,
        dropRadius: 30, 
        perturbance: 0.08 
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

  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: isMobile2 ? 1 : isTablet ? 2 : 3,
  //   slidesToScroll: 1,
  //   arrows: true, // 화살표 보이기
  //   prevArrow: <CustomPrevArrow />, // 이전 화살표 컴포넌트 설정
  //   nextArrow: <CustomNextArrow />, // 다음 화살표 컴포넌트 설정
  // };

  const handleImageClick = (pid) => {
    navigate(`/shop/detail/${pid}`);
  };
  console.log('모바일2? ->',isMobile2);
  return (
    <div className="slider-wrapper" ref={sliderWrapperRef}>
      <Swiper
        spaceBetween={0}
        slidesPerView={isMobile2 ? 1 : isTablet ? 2 : 3}
        navigation
        loop={true}
        modules={[Navigation]} 
      >
        {products.map(product => (
          <SwiperSlide key={product.pid}>
            <div className="image-container ripple">
                <img src={`http://127.0.0.1:8080/${product.pimage}`} alt={product.name} 
                  onClick={() => handleImageClick(product.pid)}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
  
  
//   (
//     <div className="slider-wrapper " ref={sliderWrapperRef} >
//       <Slider {...settings} className="ripple-effect">
//         {products.map(product => (
//           <div key={product.pid}>
//             <Link to={`/shop/detail/${product.pid}`}>
//             <div className="image-container ripple"  >
//               <img src={`http://127.0.0.1:8080/${product.pimage}`} alt={product.name} />
//             </div>
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// // Custom previous arrow component
// const CustomPrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "gray" }}
//       onClick={onClick}
//     >
//       이전
//     </div>
//   );
// };

// // Custom next arrow component
// const CustomNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "gray" }}
//       onClick={onClick}
//     >
//       다음
//     </div>
//   );
// };

export default HomeSlider;
