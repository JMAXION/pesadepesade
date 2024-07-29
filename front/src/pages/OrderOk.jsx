import { useLocation } from "react-router-dom";

export default function OrderOk() {
  const location = useLocation();
  const { orderInfo, orderItem } = location.state || {};

  return (
    <div className="order-result">
      <div className="order-result-header">주문 완료</div>
      <div className="order-result-content">
        <p className="order-status">
          고객님의 주문이 정상적으로 완료되었습니다.
        </p>
        <div className="order-number-price">
          <span className="label">주문번호:</span>{" "}
          <span className="value">{orderInfo?.orderNumber}</span>
        </div>
        <div className="order-total-price">
          <span className="label">결제금액:</span>{" "}
          <span className="value">
            {orderInfo?.totalPrice.toLocaleString()} KRW
          </span>
        </div>
        <div className="order-user-info">
          <div className="order-user-info-title">
            <p>배송지</p>
          </div>
          <div className="order-user-name">
            <span>받는사람</span> <span>{orderInfo.userName}</span>
          </div>
          <div className="order-user-address">
            <span>주소</span>{" "}
            <span>
              {orderInfo.zipcode}
              {orderInfo.address}
              {orderInfo.detailAddress}
            </span>
          </div>
          <div className="order-user-tel">
            <span>연락처</span>{" "}
            <span>
              {orderInfo.phoneNumber1}
              {orderInfo.phoneNumber2}
              {orderInfo.phoneNumber3}
            </span>
          </div>
        </div>
        <div className="order-item-info">
          <p>주문상품</p>
          {orderItem.map((obj) => (
            <tr className="order-list-info">
              <img src={`http://127.0.0.1:8080/${obj.pimage}`}></img>
              <td>
                {obj.pname}
                {obj.pdetail}
                <br />
                <span className="order-option-info">
                  [옵션 : {obj.gift_option}]
                </span>
                <br />
                <span className="order-option-info">수량 : {obj.qty}</span>
                <br />
                <span className="order-option-info">
                  상품구매금액 : {obj.pprice.toLocaleString()}krw
                </span>
              </td>
            </tr>
          ))}
        </div>
        <div className="order-price-info">
          <p>결제정보</p>
          <div className="order-price-mount">
            <div className="order-product-price">
              <span className="order-price-mount">주문상품</span>{" "}
              <span>{orderInfo.totalPrice.toLocaleString()} krw</span>{" "}
            </div>
            <div className="order-product-delivery">
              <span className="order-delivery-price">배송비</span>{" "}
              <span>+0 krw</span>
            </div>
            <div className="order-total-price">
              <span>결제금액</span>{" "}
              <span>{orderInfo.totalPrice.toLocaleString()}krw</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
