import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/order.css";
import DaumPostcode from "react-daum-postcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Order() {
  const location = useLocation();
  const { orderItem } = location.state || { orderItem: [] };
  //   console.log("넘어오는 값", orderItem);
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // 추가: 세부 내용 토글 상태

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

  /* radio check 색상 변경 */
  const [selected, setSelected] = useState("addr_paymethod0");

  const handleChange2 = (event) => {
    setSelected(event.target.id);
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

  const handleDetailsToggle = () => {
    // 추가: 세부 내용 토글 함수
    setIsDetailsOpen(!isDetailsOpen);
  };

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
            <input type="radio" autocomplete="off" />
            <label>회원 정보와 동일</label>
            <input type="radio" autocomplete="off" />
            <label for="sameaddr1">새로운 배송지</label>
          </div>
        </div>
        <tbody>
          <tr>
            <th>받는 사람 *</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>주소 *</th>
            <td>
              <ul className="order-addressform">
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
            </td>
          </tr>
          <tr className="order-phonenumber">
            <th>전화번호 *</th>
            <td>
              <input type="text" />-
              <input type="text" />-
              <input type="text" />
            </td>
          </tr>
          <tr className="order-email">
            <th>이메일 *</th>
            <td>
              <input type="text" className="order-email first" />
              <span className="order-email at">@</span>
              <input type="text" className="order-email domain" />
            </td>
          </tr>
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
              <span>0 krw</span>
              <button type="button">쿠폰 적용</button>
            </div>
            <p>보유 쿠폰: 1개</p>
          </div>
          <div className="order-point">
            <div>
              <p>Point</p>
              <div>
                <input type="text" />
                <button type="button">전액 사용</button>
              </div>
            </div>
            <p>보유 잔액: 0원</p>
            <p>
              1회 구매시 Point 최대 사용금액은 0원입니다.
              <FontAwesomeIcon
                icon={isDetailsOpen ? faChevronUp : faChevronDown}
                onClick={handleDetailsToggle}
              />
            </p>
            {isDetailsOpen && ( // 추가: 세부 내용 렌더링
              <p className="order-point-expanded">
                최소 Point 1,000원 이상일 때 사용 가능합니다.
                <br />
                Point으로만 결제할 경우, 결제금액이 0으로 보여지는 것은 정상이며
                [결제하기] 버튼을 누르면 주문이 완료됩니다. <br />
                Point 사용 시 해당 상품에 대한 Point은 적립되지 않습니다.
              </p>
            )}
            <div className="order-point sale">
              <p className="order-subcontent">적용금액</p>
              <span>-0 krw</span>
            </div>
            <hr />
          </div>
        </div>
        <div>
          <p className="order-subcontent">결제정보</p>
          <tbody className="order-price">
            <div>
              <th>주문상품</th>
              <td>25,000 krw</td>
            </div>
            <div>
              <th>배송비</th>
              <td>+0 krw</td>
            </div>
            <div>
              <th>할인/부가결제</th>
              <td>
                <span>-0</span> krw
              </td>
            </div>
            <div>
              <p className="order-subcontent">최종 결제 금액</p>
              <span>25,000 krw</span>
            </div>
          </tbody>
        </div>
        <div className="order-payment">
          <p className="order-subcontent">결제수단</p>
          <div>
            <input
              type="radio"
              id="addr_paymethod0"
              name="payment"
              checked={selected === "addr_paymethod0"}
              onChange={handleChange2}
              style={{ display: "none" }}
            />
            <label
              htmlFor="addr_paymethod0"
              className={selected === "addr_paymethod0" ? "selected" : ""}
            >
              신용카드
            </label>

            <input
              type="radio"
              id="addr_paymethod1"
              name="payment"
              checked={selected === "addr_paymethod1"}
              onChange={handleChange2}
              style={{ display: "none" }}
            />
            <label
              htmlFor="addr_paymethod1"
              className={selected === "addr_paymethod1" ? "selected" : ""}
            >
              에스크로(가상계좌)
            </label>

            <input
              type="radio"
              id="addr_paymethod2"
              name="payment"
              checked={selected === "addr_paymethod2"}
              onChange={handleChange2}
              style={{ display: "none" }}
            />
            <label
              htmlFor="addr_paymethod2"
              className={selected === "addr_paymethod2" ? "selected" : ""}
            >
              에스크로(계좌이체)
            </label>

            <input
              type="radio"
              id="addr_paymethod3"
              name="payment"
              checked={selected === "addr_paymethod3"}
              onChange={handleChange2}
              style={{ display: "none" }}
            />
            <label
              htmlFor="addr_paymethod3"
              className={selected === "addr_paymethod3" ? "selected" : ""}
            >
              휴대폰
            </label>

            <input
              type="radio"
              id="addr_paymethod4"
              name="payment"
              checked={selected === "addr_paymethod4"}
              onChange={handleChange2}
              style={{ display: "none" }}
            />
            <label
              htmlFor="addr_paymethod4"
              className={selected === "addr_paymethod4" ? "selected" : ""}
            >
              카카오페이
            </label>
          </div>
        </div>
        <div className="order-final">
          <button type="button">25,000 krw 결제하기</button>
        </div>
      </div>
    </div>
  );
}
