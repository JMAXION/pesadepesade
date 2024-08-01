import { useLocation } from "react-router-dom";
import '../css/order.css'

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
        <div className="order-info-section">
          <div className="order-info">
            <span className="label">주문번호:</span>{" "}
            <span className="value">{orderInfo?.orderNumber}</span>
          </div>
          <div className="order-info">
            <span className="label">결제금액:</span>{" "}
            <span className="value">
              {orderInfo?.totalPrice.toLocaleString()} KRW
            </span>
          </div>
        </div>
        <div className="order-user-info">
          <div className="order-user-info-title">
            <p>배송지</p>
          </div>
          <div className="order-user-info-detail">
            <div className="order-info">
              <span className="label">받는사람:</span>{" "}
              <span className="value">{orderInfo.userName}</span>
            </div>
            <div className="order-info">
              <span className="label">주소:</span>{" "}
              <span className="value">
                {orderInfo.zipcode} {orderInfo.address} {orderInfo.detailAddress}
              </span>
            </div>
            <div className="order-info">
              <span className="label">연락처:</span>{" "}
              <span className="value">
                {orderInfo.phoneNumber1} {orderInfo.phoneNumber2} {orderInfo.phoneNumber3}
              </span>
            </div>
          </div>
        </div>
        <div className="order-item-info">
          <p className="section-title">주문상품</p>
          {orderItem.map((obj, index) => (
            <div className="order-item" key={index}>
              <img src={`http://127.0.0.1:8080/${obj.pimage}`} alt={obj.pname} />
              <div className="order-item-details">
                <p className="order-item-name">{obj.pname}</p>
                <p className="order-item-detail">{obj.pdetail}</p>
                <p className="order-option-info">[옵션 : {obj.gift_option}]</p>
                <p className="order-option-info">수량 : {obj.qty}</p>
                <p className="order-option-info">
                  상품구매금액 : {obj.pprice.toLocaleString()} KRW
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="order-price-info">
          <p className="section-title">결제정보</p>
          <div className="order-price-details">
            <div className="order-info">
              <span className="label">주문상품:</span>{" "}
              <span className="value">{orderInfo.totalPrice.toLocaleString()} KRW</span>
            </div>
            <div className="order-info">
              <span className="label">배송비:</span>{" "}
              <span className="value">+0 KRW</span>
            </div>
            <div className="order-info">
              <span className="label">결제금액:</span>{" "}
              <span className="value">{orderInfo.totalPrice.toLocaleString()} KRW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
