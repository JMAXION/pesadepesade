import React, { useState } from "react";
import "../../css/stocklist.css";
import ImageCarousel from "./ImageCarousel";
import StockModal from "./StockModal";

export default function StockFlagShip() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => setIsFirstModalOpen(true);
  const closeFirstModal = () => setIsFirstModalOpen(false);

  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

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
          <button onClick={openFirstModal}>지도 보기</button>
          <StockModal
            isOpen={isFirstModalOpen}
            content="페사드 성수점"
            closeModal={closeFirstModal}
          />
        </p>
      </li>
      <li className="store-two">
        <ImageCarousel />
        <p>
          <p>페사드 플래그십 스토어 한남</p>
          <p>서울 용산구 이태원로49길 16 </p>
          <p>+82 2-790-5001</p>
          <p>월-일 12:00pm - 8:00pm (무휴)</p>
          <button onClick={openSecondModal}>지도 보기</button>
          <StockModal
            isOpen={isSecondModalOpen}
            content="페사드 한남점"
            closeModal={closeSecondModal}
          />
        </p>
      </li>
    </div>
  );
}
