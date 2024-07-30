import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function OrderDetail() {
  const { oid } = useParams();
  const [orderdetails, setOrderdetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:8080/order/order-detail/${oid}`;
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        console.log("API 응답:", result.data);
        const data = Array.isArray(result.data) ? result.data : [result.data];
        setOrderdetails(data);
      })
      .catch((error) => console.error(error));
  }, [oid]);

  const handleDeleteOrder = () => {
    console.log("hi");
    const url = "http://localhost:8080/order/delete";
    axios({
      method: "delete",
      url: url,
      data: { oid: oid },
    })
      .then((result) => {
        if (result.data.cnt === 1) {
          alert("주문을 취소하시겠습니까?");
          navigate("/mypage/order");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="front">
      <div className="order-detail-container">
        <div className="order-detail-header">
          <h3>주문번호: {oid}</h3>
          {orderdetails.length > 0 && (
            <div className="order-detail-user-info">
              <span>{orderdetails[0].user_id} 님의 주문 상세 내역입니다</span>
            </div>
          )}
        </div>
        <div className="order-detail-body">
          {orderdetails.map((detail, index) => (
            <div key={index} className="order-detail-item">
              <span className="order-detail-item pname">
                product:{detail.full_detail}
              </span>
              <span>qty: {detail.quantity}</span>
              <span>price: {detail.product_price}</span>
              <p>Total Price: {detail.total_price}</p>
            </div>
          ))}
          <div className="order-detail-buttons">
            <Link to="/mypage/order">
              <button type="button" className="order-detail-button">
                이전
              </button>
            </Link>
            <button
              type="button"
              className="order-detail-button cancel"
              onClick={handleDeleteOrder}
            >
              주문취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
