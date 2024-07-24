import React, { useState } from "react";

export default function OrderCoupon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="order-coupon">
        <p className="order-subcontent">할인/부가결제</p>
        <div>
          <p>쿠폰 할인</p>
          <p>0 krw</p>
          <button type="button" onClick={openModal()}>
            쿠폰 적용
          </button>
          <p>보유 쿠폰: 1개</p>
        </div>
        <div>
          <p>Point</p>
          <input type="text" />
          <button type="button">전액 사용</button>
          <p>보유 잔액: 0원</p>
          <p>
            1회 구매시 Point 최대 사용금액은 0원입니다. 최소 Point 1,000원
            이상일 때 사용 가능합니다. Point으로만 결제할 경우, 결제금액이 0으로
            보여지는 것은 정상이며 [결제하기] 버튼을 누르면 주문이 완료됩니다.
            Point 사용 시 해당 상품에 대한 Point은 적립되지 않습니다.
          </p>
          <p className="order-subcontent">적용금액</p>
          <span>-0 krw</span>
          <hr />
        </div>
      </div>
    </div>
  );
}
