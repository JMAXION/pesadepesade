import React, { useState } from "react";
import SubTitle from "../../components/SubTitle";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyPageCoupon() {
  const [showDetail, setShowDetail] = useState(null);

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
        discountRate: "3,000 krw",
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
        discountRate: "5,000 krw",
        accumulationRate: "500 krw",
        deposit: "-",
        validity: "발급일로부터 90일 이내",
        applicableProducts: "전체상품",
      },
    },
  ];

  return (
    <div className="mycoupon">
      <SubTitle title="Coupon" />
      <div className="mycoupon-admin">
        <p className="mycoupon-admin-title">쿠폰인증번호 등록하기</p>
        <li className="mycoupon-admin-access">
          <input type="text" />
          <button>쿠폰번호인증</button>
        </li>
        <li className="mycoupon-admin-warning">
          <p>
            <FontAwesomeIcon icon={faLock} className="mycoupon-icon" />
            10~35자 일련번호 "-" 제외{" "}
          </p>
          <p>쇼핑몰에서 발행한 쿠폰번호만 입력해주세요.</p>
        </li>
      </div>
      <div className="mycoupon-admin-table">
        <table border={1} className="mycoupon-admin-table-table">
          <thead>
            <tr>
              <th colSpan={4} className="mycoupon-admin-table-title">
                마이쿠폰 목록(총 {coupons.length}장)
              </th>
            </tr>
          </thead>
          <tbody className="mycoupon-admin-table-tbody">
            <tr>
              <th>쿠폰명</th>
              <th>할인</th>
              <th>적립</th>
              <th>상세</th>
            </tr>
            {coupons.map((coupon) => (
              <React.Fragment key={coupon.id}>
                <tr>
                  <td>{coupon.name}</td>
                  <td>{coupon.discount}</td>
                  <td>{coupon.details.accumulationRate}</td>
                  <td
                    className="mycoupon-admin-table-detail"
                    onClick={() => handleDetailClick(coupon.id)}
                    style={{ cursor: "pointer" }}
                  >
                    보기
                  </td>
                </tr>
                {showDetail === coupon.id && (
                  <tr className="mycoupon-admin-detail">
                    <td colSpan={4}>
                      <p>쿠폰번호 : {coupon.details.number}</p>
                      <p>구매금액 : {coupon.details.purchaseAmount}</p>
                      <p>결제수단 : {coupon.details.paymentMethod}</p>
                      <p>쿠폰혜택 : {coupon.details.benefit}</p>
                      <p>할인액(률) : {coupon.details.discountRate}</p>
                      <p>적립액(률) : {coupon.details.accumulationRate}</p>
                      <p>예치금 : {coupon.details.deposit}</p>
                      <p>사용가능 기간 : {coupon.details.validity}</p>
                      <p>쿠폰적용상품 : {coupon.details.applicableProducts}</p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
