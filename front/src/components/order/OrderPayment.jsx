import React, { useState } from "react";

export default function OrderPayment() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <div>
      <div className="order-price">
        <p className="order-subcontent">결제정보</p>
        <div>
          <span>주문상품</span>
          <span>25,000 krw</span>
        </div>
        <div>
          <span>배송비</span>
          <span>+0 krw</span>
        </div>
        <div>
          <span>할인/부가결제</span>
          <span>-0 krw</span>
        </div>
        <div>
          <p className="order-subcontent">최종 결제 금액</p>
          <span>25,000 krw</span>
        </div>
      </div>
      <div className="order-payment">
        <p className="order-subcontent">결제수단</p>
        <div>
          <span>
            <input
              id="addr_paymethod0"
              name="addr_paymethod"
              value="card"
              type="radio"
              checked={paymentMethod === "card"}
              onChange={handlePaymentMethodChange}
              autoComplete="off"
            />
            <label htmlFor="addr_paymethod0">신용카드</label>
          </span>
          <span className="ec-base-label">
            <input
              id="addr_paymethod1"
              name="addr_paymethod"
              value="icash"
              type="radio"
              checked={paymentMethod === "icash"}
              onChange={handlePaymentMethodChange}
              autoComplete="off"
            />
            <label htmlFor="addr_paymethod1">에스크로(가상계좌)</label>
          </span>
          <span className="ec-base-label">
            <input
              id="addr_paymethod2"
              name="addr_paymethod"
              value="tcash"
              type="radio"
              checked={paymentMethod === "tcash"}
              onChange={handlePaymentMethodChange}
              autoComplete="off"
            />
            <label htmlFor="addr_paymethod2">에스크로(계좌이체)</label>
          </span>
          <span className="ec-base-label">
            <input
              id="addr_paymethod3"
              name="addr_paymethod"
              value="cell"
              type="radio"
              checked={paymentMethod === "cell"}
              onChange={handlePaymentMethodChange}
              autoComplete="off"
            />
            <label htmlFor="addr_paymethod3">휴대폰</label>
          </span>
          <span className="ec-base-label">
            <input
              id="addr_paymethod4"
              name="addr_paymethod"
              value="kakaopay"
              type="radio"
              checked={paymentMethod === "kakaopay"}
              onChange={handlePaymentMethodChange}
              autoComplete="off"
            />
            <label htmlFor="addr_paymethod4">카카오페이</label>
          </span>
        </div>
      </div>
    </div>
  );
}
