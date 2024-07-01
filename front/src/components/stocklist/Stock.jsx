import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Stock() {
  const [stockList, setStockList] = useState([]);
  useEffect(() => {
    axios
      .get("/data/stockList.json")
      .then((res) => {
        setStockList(res.data || []); // 데이터가 없을 경우 빈 배열로 초기화
        console.log(res.data); // 데이터를 성공적으로 가져온 후에 로그 출력
      })
      .catch((error) => console.log(error));
  }, []);
  const rows = [];
  for (let i = 0; i < stockList.length; i += 3) {
    rows.push(stockList.slice(i, i + 3));
  }
  return <div>stockList</div>;
}
