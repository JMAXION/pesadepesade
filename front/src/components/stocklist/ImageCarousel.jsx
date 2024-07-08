import React from "react";
import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "../../css/stock/stocklist.css";
import "../../css/slider/slick-theme.css";
import "../../css/slider/slick.css";
import "../../css/slider/HomeSlider.css";

export default function ImageCarousel() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/4dcd04f607a5f214e40e4c83e38700fd.jpeg"
            className="sub-carousel-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/6d33f19990138afaf4e9447fb39c0bf5.jpeg"
            className="sub-carousel-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/feef37f82c368f4945378fc8ecf0e330.jpeg"
            className="sub-carousel-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/37b12550b7421d1bf1da7b29f506b75c.jpeg"
            className="sub-carousel-img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
