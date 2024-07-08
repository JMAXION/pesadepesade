import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/journal.css";
import SubTitle from "../components/SubTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function JournalDetail() {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);
  const url = `http://localhost:8080/journal/${id}`;

  useEffect(() => {
    axios({
      method: "post",
      url: url,
    })
      .then((res) => setJournal(res.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!journal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="journal-detail">
      <SubTitle title={journal.jtitle} />
      <h3>{journal.ddate}</h3>
      <h4 className="journal-detail-subtitle">{journal.ddesc1}</h4>
      <div className="journal-slider">
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
              src={journal.dcarouselimg1}
              alt="이미지 1"
              className="slider-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={journal.dcarouselimg2}
              alt="이미지 2"
              className="slider-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={journal.dcarouselimg3}
              alt="이미지 3"
              className="slider-image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="journal-detail-desc">
        <img
          src={journal.ddetailimg1}
          alt=""
          className="journal-detail-desc-img"
        />
        <ul className="journal-detail-">
          <li>{journal.ddetailtitle1}</li>
          <li>{journal.ddetaildesc1}</li>
        </ul>
      </div>
    </div>
  );
}
