import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../../util/localStorage";
import { Link } from "react-router-dom";

export default function OrderResult() {
  const [orderList, setOrderList] = useState([]);
  const userId = getUser().userId;

  useEffect(() => {
    const url = ` http://localhost:8080/order/list/${userId}`;
    axios({
      method: "get",
      url: url,
    })
      .then((res) => {
        // 데이터를 rno 값에 따라 내림차순으로 정렬
        const result = res.data;
        console.log(result);
        setOrderList(result);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div className="order-list">
      {orderList.length == 0 ? (
        <>
          <p className="myorder-orderlist">주문 내역이 없습니다.</p>
        </>
      ) : (
        <ul>
          {orderList.map((list) => (
            <li key={list.oid}>
              <div className="order-summary">
                <div className="order-row top">
                  <div className="order-left">{list.odate}</div>
                  <Link to={`/mypage/order/order-detail/${list.oid}`}>
                    <span className="subject-text">{list.full_detail}</span>
                  </Link>
                </div>
                <div className="order-row bottom">
                  <strong>
                    <span className="subject-text">{list.oid}</span>
                  </strong>
                  <span>{list.total_price}krw</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
