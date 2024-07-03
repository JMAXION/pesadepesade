import React, { useState } from "react";
import "../../css/stock/stocklist.css";
import ImageCarousel from "./ImageCarousel";
import StockModal from "./StockModal";

export default function StockFlagShip() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [animationClass, setAnimationClass] = useState("");

  const openFirstModal = (type) => {
    setModalType(type);
    setIsFirstModalOpen(true);
  };
  const closeFirstModal = (type) => {
    setModalType("");
    setIsFirstModalOpen(false);
  };

  const openSecondModal = (type) => {
    setModalType(type);
    setIsSecondModalOpen(true);
  };
  const closeSecondModal = (type) => {
    setModalType(type);
    setIsSecondModalOpen(false);
  };

  return (
    <div>
      <li className="store-one">
        <img
          src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2023/10/31/PCmain.jpg"
          alt=""
          className="store-one-image"
        />
        <p>
          <p>페사드 플래그십 스토어 성수</p>
          <p>서울 성동구 성수이로 7가길 24</p>
          <p>+82 70-4070-7736</p>
          <p>월-일 11:00pm - 9:00pm(무휴)</p>
          <button onClick={openFirstModal} className="flagship-button">
            지도 보기
          </button>

          {isFirstModalOpen && (
            <StockModal
              type={modalType}
              onClose={closeFirstModal}
              places="seongsu"
            />
          )}
        </p>
      </li>
      <li className="store-two">
        <ImageCarousel />
        <p>
          <p>페사드 플래그십 스토어 한남</p>
          <p>서울 용산구 이태원로49길 16 </p>
          <p>+82 2-790-5001</p>
          <p>월-일 12:00pm - 8:00pm (무휴)</p>
          <button onClick={openSecondModal} className="flagship-button">
            지도 보기
          </button>

          {isSecondModalOpen && (
            <StockModal
              type={modalType}
              onClose={closeSecondModal}
              places="hannam"
            />
          )}
        </p>
      </li>
    </div>
  );
}
