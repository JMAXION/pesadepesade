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
  const [journal, setJournal] = useState();
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
  console.log("journaldetail-->", journal);

  return (
    <div className="journal-detail">
      <p className="journal-detail-title">
        <img src={journal.jimg} alt="" className="journal-detail-title-img" />
        <h2>{journal.jtitle}</h2>
        <h3>{journal.jdate}</h3>
      </p>
      <ul>
        <li>[BRAND STORY]</li>
        <p>{journal.jbranddesc}</p>
      </ul>
      <div className="journal-slider">
        <p>{journal.jcarouseltitle}</p>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {journal.cimg1 && (
            <SwiperSlide>
              <img
                src={journal.cimg1}
                alt="이미지 1"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.cimg2 && (
            <SwiperSlide>
              <img
                src={journal.cimg2}
                alt="이미지 2"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.cimg3 && (
            <SwiperSlide>
              <img
                src={journal.cimg3}
                alt="이미지 3"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.cimg4 && (
            <SwiperSlide>
              <img
                src={journal.cimg4}
                alt="이미지 4"
                className="slider-image"
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className="journal-detail-desc">
        <img src={journal.dimg1} alt="" className="journal-detail-desc-img" />
        <ul className="journal-detail-desc-text">
          <li>{journal.dtitle1}</li>
          <li>{journal.ddesc1}</li>
        </ul>
      </div>
      <div className="journal-detail-desc">
        <ul className="journal-detail-desc-text">
          <li>{journal.dtitle2}</li>
          <li>{journal.ddesc2}</li>
        </ul>
        <img src={journal.dimg2} alt="" className="journal-detail-desc-img" />
      </div>
      <div className="journal-detail-desc">
        <img src={journal.dimg3} alt="" className="journal-detail-desc-img" />
        <ul className="journal-detail-desc-text">
          <li>{journal.dtitle3}</li>
          <li>{journal.ddesc3}</li>
        </ul>
      </div>
      <div className="journal-detail-desc">
        <ul className="journal-detail-desc-text">
          <li>{journal.dtitle4}</li>
          <li>{journal.ddesc4}</li>
        </ul>
        <img src={journal.dimg4} alt="" className="journal-detail-desc-img" />
      </div>
      <div className="journal-detail-desc">
        <img src={journal.dimg5} alt="" className="journal-detail-desc-img" />
        <ul className="journal-detail-desc-text">
          <li>{journal.dtitle5}</li>
          <li>{journal.ddesc5}</li>
        </ul>
      </div>
      <ul className="journal-detail-editor">
        <li>[EDITOR SAY]</li>
        <li>{journal.deditor}</li>
      </ul>
    </div>
  );
}
