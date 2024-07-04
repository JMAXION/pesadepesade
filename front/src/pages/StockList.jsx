import React, { useState, useEffect } from "react";
import SubTitle from "../components/SubTitle";
import "../css/stock/stocklist.css";
import ImageCarousel from "../components/stocklist/ImageCarousel";
import Stock from "../components/stocklist/Stock";
import StockModal from "../components/stocklist/StockModal";
import StockFlagShip from "../components/stocklist/StockFlagShip";

export default function StockList() {
  return (
    <ul className="stockList">
      <li className="stockList">
        <SubTitle title="store" />
        <StockFlagShip />
        <SubTitle title="StockList" />
        <Stock />
      </li>
    </ul>
  );
}
