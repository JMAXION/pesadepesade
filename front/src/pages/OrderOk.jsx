import { useLocation } from "react-router-dom";

// OrderOk 컴포넌트 내에서 useLocation을 이용해 state를 받아오는 예시
export default function OrderOk() {
    const location = useLocation();
    const { orderInfo } = location.state || {};
    const { orderItem } = location.state || {};
    console.log(orderInfo);
    console.log(orderItem);
    return (
        <div className="order-result">
            <h1>주문이 완료되었습니다.</h1>
            <ul>
                <li>주문번호 : {orderInfo.orderNumber}</li>
            </ul>

            <ul>
            {orderItem.map((obj)=>(
                <li>{obj.pname} - {obj.pdetail} x  {obj.qty}</li>
            ))}
            </ul>
            <ul>
                <li>배송지 {orderInfo.zipcode}
                {orderInfo.address}
                {orderInfo.detailAddress}
                </li>
            </ul>
            <h1>결제 금액 : {orderInfo.totalPrice.toLocaleString()}krw</h1>
            {/* 필요에 따라 다른 orderInfo 데이터를 렌더링 */}
        </div>
    );
}
