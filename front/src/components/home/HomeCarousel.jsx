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
        <SwiperSlide><img src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/f05764580a9e7069427b19ddf9f9602b.jpg" alt="이미지 1" className="slider-image" /></SwiperSlide>
        <SwiperSlide><img src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/0b47ea5ffdbce5300879e083bb9ce272.jpg" alt="이미지 2" className="slider-image" /></SwiperSlide>
        <SwiperSlide><img src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/07/05/0c096dae5a1c5622a304bb467d483ee4.jpg" alt="이미지 3" className="slider-image" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
