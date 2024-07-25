import React, { useEffect, useRef, useState } from "react";

export default function OrderCouponModal({ onClose, couponDiscount }) {
  const modalRef = useRef();
  const [fadeOut, setFadeOut] = useState(false);
  const [showDetail, setShowDetail] = useState(null);
  const [couponPrice, setCouponPrice] = useState(null);

  const handleDetailClick = (couponId) => {
    setShowDetail(showDetail === couponId ? null : couponId);
  };

  const coupons = [
    {
      id: 1,
      name: "회원가입 쿠폰",
      discount: "3000 krw",
      details: {
        number: "1",
        purchaseAmount: "제한없음",
        paymentMethod: "제한없음",
        benefit: "3000 krw 할인",
        discountRate: "3,000",
        accumulationRate: "-",
        deposit: "-",
        validity: "발급일로부터 90일 이내",
        applicableProducts: "전체상품",
      },
    },
    {
      id: 2,
      name: "생일 쿠폰",
      discount: "5000 krw",
      details: {
        number: "2",
        purchaseAmount: "제한없음",
        paymentMethod: "제한없음",
        benefit: "5000 krw 할인",
        discountRate: "5,000",
        accumulationRate: "500 krw",
        deposit: "-",
        validity: "발급일로부터 90일 이내",
        applicableProducts: "전체상품",
      },
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };
  const handleCouponUse = (price) => {
    setCouponPrice(price);
    console.log(price);
    couponDiscount(price);
  };
  return (
    <div className="modal-overlay">
      <div ref={modalRef} className={`modal ${fadeOut ? "fade-out" : ""}`}>
        <p>쿠폰내역 확인</p>
        <div className="admincoupon-admin-table">
          <table border={1} className="admincoupon-admin-table-table">
            <thead className="admincoupon-admin-table-table-thead">
              <tr>
                <th colSpan={5} className="admincoupon-admin-table-title">
                  마이쿠폰 목록(총 {coupons.length}장)
                </th>
              </tr>
            </thead>
            <tbody className="admincoupon-admin-table-tbody">
              <tr>
                <th className="admincoupon-admin-table-tbody-th">쿠폰명</th>
                <th className="admincoupon-admin-table-tbody-th">할인</th>
                <th className="admincoupon-admin-table-tbody-th">적립</th>
                <th className="admincoupon-admin-table-tbody-th">상세</th>
                <th className="admincoupon-admin-table-tbody-th">적용하기</th>
              </tr>
              {coupons.map((coupon) => (
                <React.Fragment key={coupon.id}>
                  <tr>
                    <td className="admincoupon-admin-table-tbody-td">
                      {coupon.name}
                    </td>
                    <td className="admincoupon-admin-table-tbody-td">
                      {coupon.discount}
                    </td>
                    <td className="admincoupon-admin-table-tbody-td">
                      {coupon.details.accumulationRate}
                    </td>
                    <td
                      className="admincoupon-admin-table-detail"
                      onClick={() => handleDetailClick(coupon.id)}
                      style={{ cursor: "pointer" }}
                    >
                      보기
                    </td>
                    <td
                      onClick={() => {
                        handleCouponUse(coupon.details.discountRate);
                        onClose();
                      }}
                    >
                      적용하기
                    </td>
                  </tr>
                  {showDetail === coupon.id && (
                    <tr className="admincoupon-admin-detail">
                      <td colSpan={4}>
                        <p>쿠폰번호 : {coupon.details.number}</p>
                        <p>구매금액 : {coupon.details.purchaseAmount}</p>
                        <p>결제수단 : {coupon.details.paymentMethod}</p>
                        <p>쿠폰혜택 : {coupon.details.benefit}</p>
                        <p>할인액(률) : {coupon.details.discountRate}krw</p>
                        <p>적립액(률) : {coupon.details.accumulationRate}</p>
                        <p>예치금 : {coupon.details.deposit}</p>
                        <p>사용가능 기간 : {coupon.details.validity}</p>
                        <p>
                          쿠폰적용상품 : {coupon.details.applicableProducts}
                        </p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
