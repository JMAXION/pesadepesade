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
  return (
    <div>
      {rows.map((row, rowIndex) => (
        <ul className="stock" key={rowIndex}>
          {row.map((stock, index) => {
            const actualIndex = rowIndex * 5 + index;
            return stock.id ? (
              <li key={actualIndex} className="stock-list">
                <div>
                  <p>{stock.name}</p>
                  <p>{stock.address}</p>
                  <p>{stock.phone}</p>
                  <p>{stock.opentime}</p>
                </div>
              </li>
            ) : (
              <p key={`empty-${actualIndex}`}></p>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
