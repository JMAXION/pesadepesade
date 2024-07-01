import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

export default function HomeCarousel() {
  return (
    <div className="main-slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide><img src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/05/30/ac069a771fb78612d41483046f585d07.jpg" alt="이미지 1" className="slider-image" /></SwiperSlide>
        <SwiperSlide><img src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/05/30/6f67fafd15cb03a0654737a5dd47edb6.jpg" alt="이미지 2" className="slider-image" /></SwiperSlide>
        <SwiperSlide><img src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/05/30/d0b4f235e7bc8a82c7e14e7077768b0d.jpg" alt="이미지 3" className="slider-image" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
