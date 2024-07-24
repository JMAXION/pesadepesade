import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function OrderList() {
  return (
    <div>
      <div className="order-header">
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>pesade</span>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="order-subtitle">
        <span>주문 / 결제</span>
      </div>
      <div>
        <p className="order-subcontent">배송지</p>
        <div className="order-address">
          <input
            id="sameaddr0"
            name="sameaddr"
            value="M"
            type="radio"
            autocomplete="off"
          />
          <label>회원 정보와 동일</label>
          <input
            id="sameaddr1"
            name="sameaddr"
            value="F"
            type="radio"
            autocomplete="off"
          />
          <label for="sameaddr1">새로운 배송지</label>
        </div>
      </div>
    </div>
  );
}
