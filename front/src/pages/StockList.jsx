import React, { useState, useEffect } from "react";
import SubTitle from "../components/SubTitle";
import "../css/stocklist.css";
import ImageCarousel from "../components/stocklist/ImageCarousel";
import Stock from "../components/stocklist/Stock";
import StockModal from "../components/stocklist/StockModal";
import StockFlagShip from "../components/stocklist/StockFlagShip";

export default function StockList() {
  return (
    <div>
      <ul>
        <SubTitle title="store" />
        <StockFlagShip />
      </ul>
      <SubTitle title="StockList" />
      <Stock />
    </div>
  );
}
