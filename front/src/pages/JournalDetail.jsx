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
      <SubTitle title={journal.jtitle} />
      <img src={journal.dtitleimage} alt="" />
      <h3>{journal.ddate}</h3>
      <ul>
        <li>[BRAND STORY]</li>
        <h4 className="journal-detail-subtitle">{journal.ddesc1}</h4>
      </ul>
      <div className="journal-slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {journal.dcarouselimg1 && (
            <SwiperSlide>
              <img
                src={journal.dcarouselimg1}
                alt="이미지 1"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.dcarouselimg2 && (
            <SwiperSlide>
              <img
                src={journal.dcarouselimg2}
                alt="이미지 2"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.dcarouselimg3 && (
            <SwiperSlide>
              <img
                src={journal.dcarouselimg3}
                alt="이미지 3"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.dcarouselimg4 && (
            <SwiperSlide>
              <img
                src={journal.dcarouselimg4}
                alt="이미지 4"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.dcarouselimg5 && (
            <SwiperSlide>
              <img
                src={journal.dcarouselimg5}
                alt="이미지 5"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.dcarouselimg6 && (
            <SwiperSlide>
              <img
                src={journal.dcarouselimg6}
                alt="이미지 6"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.dcarouselimg7 && (
            <SwiperSlide>
              <img
                src={journal.dcarouselimg7}
                alt="이미지 7"
                className="slider-image"
              />
            </SwiperSlide>
          )}
          {journal.dcarouselimg8 && (
            <SwiperSlide>
              <img
                src={journal.dcarouselimg8}
                alt="이미지 8"
                className="slider-image"
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className="journal-detail-desc">
        <img
          src={journal.ddetailimg1}
          alt=""
          className="journal-detail-desc-img"
        />
        <ul className="journal-detail-desc-text">
          <li>{journal.ddetailtitle1}</li>
          <li>{journal.ddetaildesc1}</li>
        </ul>
      </div>
      <div className="journal-detail-desc">
        <ul className="journal-detail-desc-text">
          <li>{journal.ddetailtitle2}</li>
          <li>{journal.ddetaildesc2}</li>
        </ul>
        <img
          src={journal.ddetailimg2}
          alt=""
          className="journal-detail-desc-img"
        />
      </div>
      <div className="journal-detail-desc">
        <img
          src={journal.ddetailimg3}
          alt=""
          className="journal-detail-desc-img"
        />
        <ul className="journal-detail-desc-text">
          <li>{journal.ddetailtitle3}</li>
          <li>{journal.ddetaildesc3}</li>
        </ul>
      </div>
      <div className="journal-detail-desc">
        <ul className="journal-detail-desc-text">
          <li>{journal.ddetailtitle4}</li>
          <li>{journal.ddetaildesc4}</li>
        </ul>
        <img
          src={journal.ddetailimg4}
          alt=""
          className="journal-detail-desc-img"
        />
      </div>
      <div className="journal-detail-desc">
        <img
          src={journal.ddetailimg5}
          alt=""
          className="journal-detail-desc-img"
        />
        <ul className="journal-detail-desc-text">
          <li>{journal.ddetailtitle5}</li>
          <li>{journal.ddetaildesc5}</li>
        </ul>
      </div>
      <div className="journal-detail-desc">
        <ul className="journal-detail-desc-text">
          <li>{journal.ddetailtitle6}</li>
          <li>{journal.ddetaildesc6}</li>
        </ul>
        <img
          src={journal.ddetailimg6}
          alt=""
          className="journal-detail-desc-img"
        />
      </div>
      <ul className="journal-detail-editor">
        <li>[EDITOR SAY]</li>
        <li>{journal.ddesc2}</li>
      </ul>
    </div>
  );
}
