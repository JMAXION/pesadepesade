import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/order.css";
import DaumPostcode from "react-daum-postcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import OrderCouponModal from "../components/order/OrderCouponModal.jsx";

export default function Order() {
  const location = useLocation();
  const { orderItem } = location.state || { orderItem: [] };
  console.log("넘어오는 값", orderItem);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [couponPrice, setCouponPrice] = useState();
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
  const calculateTotalPrice = (items) => {
    if (!Array.isArray(items)) {
      console.error("items is not an array:", items);
      return 0;
    }
    return items.reduce((acc, item) => acc + (item.tprice || 0), 0);
  };

  const total = calculateTotalPrice(orderItem);

  console.log("최종값", total);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddress = (e) => {
    setOrderFormData({
      ...orderFormData,
      zipcode: e.zipcode,
      address: e.address,
    });
  };

  const [orderFormData, setOrderFormData] = useState({
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  const refs = {
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
    detailAddressRef: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
    top: "100px",
  };
  const postCodeStyle = {
    width: "360px",
    height: "480px",
  };

  const completeHandler = (data) => {
    const { address, zonecode } = data;
    handleAddress({ zipcode: zonecode, address: address });
  };

  const closeHandler = (state) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
      refs.detailAddressRef.current.value = "";
      refs.detailAddressRef.current.focus();
    }
  };

  const couponDiscount = (price) => {
    console.log("orderprice-->", price);
    setCouponPrice(price);
  };
  let totalprice = "";
  return (
    <div className="front">
      <div className="order-page">
        <div className="order-header">
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
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
              type="radio"
              autocomplete="off"
            />
            <label>회원 정보와 동일</label>
            <input
              id="sameaddr1"
              name="sameaddr"
              type="radio"
              autocomplete="off"
            />
            <label for="sameaddr1">새로운 배송지</label>
          </div>
        </div>
        <tbody>
          <td>
            <div>
              <div className="order-receiver">
                <span>받는 사람 *</span>
                <input type="text" />
              </div>
              <div className="order-addressform">
                <th>주소 *</th>
                <td>
                  <ul>
                    <li>
                      <input
                        className="order-addressform zipcode"
                        type="text"
                        placeholder="우편번호"
                        name="zipcode"
                        value={orderFormData.zipcode}
                        onChange={handleChange}
                      />
                      <button type="button" onClick={handleToggle}>
                        주소검색
                      </button>
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="기본주소"
                        name="address"
                        value={orderFormData.address}
                        onChange={handleChange}
                        ref={refs.addressRef}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="상세 주소(선택)"
                        name="detailAddress"
                        value={orderFormData.detailAddress}
                        onChange={handleChange}
                        ref={refs.detailAddressRef}
                      />
                    </li>
                  </ul>
                </td>
              </div>
              {isOpen && (
                <div>
                  <DaumPostcode
                    className="postmodal step2-postmodal"
                    theme={themeObj}
                    style={postCodeStyle}
                    onComplete={completeHandler}
                    onClose={closeHandler}
                  />
                </div>
              )}
            </div>
            <div className="order-phonenumber">
              <span>전화번호 *</span>
              <input type="text" />-
              <input type="text" />-
              <input type="text" />
            </div>
            <div className="order-email">
              <span>이메일 *</span>
              <input type="text" className="order-email first" />
              <span className="order-email at">@</span>
              <input type="text" />
            </div>
          </td>
        </tbody>
        <div>
          <p className="order-subcontent">
            <th>주문상품</th>
          </p>
        </div>
        <div className="order-product">
          <tbody>
            {orderItem.map((item) => (
              <tr key={item.cid}>
                <td>
                  <Link to={`/shop/detail/${item.pid}`}>
                    <img
                      src={`http://localhost:8080/${item.pimage}`}
                      alt={item.pname}
                    />
                  </Link>
                </td>
                <td>
                  <div>
                    <p>{item.pname}</p>
                    <p>{item.pdetail}</p>
                    <p>[옵션: {item.gift_option}]</p>
                    <p>수량: {item.qty} 개</p>
                    <p>{item.pprice * item.qty} krw</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
        <div>
          <p className="order-subcontent">할인/부가결제</p>
          <div className="order-coupon">
            <div>
              <span>쿠폰 할인</span>
              <span>{couponPrice}</span>
              <button
                type="button"
                onClick={() => {
                  openModal();
                }}
              >
                쿠폰 적용
              </button>
            </div>
            <p>보유 쿠폰: {coupons.length}개</p>
          </div>
          {isModalOpen && (
            <OrderCouponModal
              onClose={closeModal}
              couponDiscount={couponDiscount}
            />
          )}
          <div>
            <p>Point</p>
            <input type="text" />
            <button type="button">전액 사용</button>
            <p>보유 잔액: 0원</p>
            <p>
              1회 구매시 Point 최대 사용금액은 0원입니다. 최소 Point 1,000원
              이상일 때 사용 가능합니다. Point으로만 결제할 경우, 결제금액이
              0으로 보여지는 것은 정상이며 [결제하기] 버튼을 누르면 주문이
              완료됩니다. Point 사용 시 해당 상품에 대한 Point은 적립되지
              않습니다.
            </p>
            <p className="order-subcontent">적용금액</p>
            <span>-0 krw</span>
            <hr />
          </div>
        </div>
        <div className="order-price">
          <p className="order-subcontent">결제정보</p>
          <div>
            <span>주문상품</span>
            <span>{total} krw</span>
          </div>
          <div>
            <span>배송비</span>
            <span>+0 krw</span>
          </div>
          <div>
            <span>할인/부가결제</span>
            <span>-{couponPrice}krW</span>
          </div>
          <div>
            <p className="order-subcontent">최종 결제 금액</p>
            <span> krw</span>
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
                checked="checked"
                autocomplete="off"
              />
              <label for="addr_paymethod0">신용카드</label>
            </span>
            <span className="ec-base-label">
              <input
                id="addr_paymethod1"
                name="addr_paymethod"
                value="icash"
                type="radio"
                autocomplete="off"
              />
              <label for="addr_paymethod1">에스크로(가상계좌)</label>
            </span>
            <span className="ec-base-label">
              <input
                id="addr_paymethod2"
                name="addr_paymethod"
                value="tcash"
                type="radio"
                autocomplete="off"
              />
              <label for="addr_paymethod2">에스크로(계좌이체)</label>
            </span>
            <span className="ec-base-label">
              <input
                id="addr_paymethod3"
                name="addr_paymethod"
                value="cell"
                type="radio"
                autocomplete="off"
              />
              <label for="addr_paymethod3">휴대폰</label>
            </span>
            <span className="ec-base-label">
              <input
                id="addr_paymethod4"
                name="addr_paymethod"
                value="kakaopay"
                type="radio"
                autocomplete="off"
              />
              <label for="addr_paymethod4">카카오페이</label>
            </span>
          </div>
        </div>
        <div>
          <button type="button">{total}krw 결제하기</button>
        </div>
      </div>
    </div>
  );
}
