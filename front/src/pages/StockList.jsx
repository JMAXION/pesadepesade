import React, { useState, useEffect } from "react";
import SubTitle from "../components/SubTitle";
import "../css/stocklist.css";
import ImageCarousel from "../components/stocklist/ImageCarousel";
import Stock from "../components/stocklist/Stock";

export default function StockList() {
  return (
    <div>
      <ul>
        <SubTitle title="store" />
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
            <button>지도 보기</button>
          </p>
        </li>
        <li className="store-two">
          <ImageCarousel />
          <p>
            <p>페사드 플래그십 스토어 한남</p>
            <p>서울 용산구 이태원로49길 16 </p>
            <p>+82 2-790-5001</p>
            <p>월-일 12:00pm - 8:00pm (무휴)</p>
            <button>지도 보기</button>
          </p>
        </li>
      </ul>
      <SubTitle title="StockList" />
      <Stock />
    </div>
  );
}
