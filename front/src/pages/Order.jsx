import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/order.css";
import DaumPostcode from "react-daum-postcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { getUser } from "../util/localStorage";

export default function Order() {
  const location = useLocation();
  const { orderItem } = location.state || { orderItem: [] };
  const userId = getUser()?.userId;

  console.log('아디',userId);
  // 이름, 주소, 전화번호, 이메일
  const totalPrice = orderItem.reduce(
    (acc, item) => acc + (item.pprice * item.qty), 0
  );
  
  const [isOpen, setIsOpen] = useState(false);


  const [orderFormData, setOrderFormData] = useState({
    userName: "",
    zipcode: "",
    address: "",
    detailAddress: "",
    phoneNumber1: "",
    phoneNumber2: "",
    phoneNumber3: "",
    emailId: "",
    emailDomain: "",
  });


  const handleAddress = (e) => {
    setOrderFormData({
      ...orderFormData,
      zipcode: e.zipcode,
      address: e.address,
    });
  };



  // const [orderFormData, setOrderFormData] = useState({
  //   zipcode: "",
  //   address: "",
  //   detailAddress: "",
  // });

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

  // const completeHandler = (data) => {
  //   const { address, zonecode } = data;
  //   handleAddress({ zipcode: zonecode, address: address });
  // };

  const completeHandler = (data) => {
    const { address, zonecode } = data;
    setOrderFormData((prevData) => ({
      ...prevData,
      zipcode: zonecode,
      address: address,
    }));
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

  const fetchMemberInfo = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/order/info/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const originMemberInfo = async () => {
    const memberInfo = await fetchMemberInfo();
    if (!memberInfo) return;

    const addressParts = memberInfo.address.split(' / ');

    setOrderFormData({
      userName: memberInfo.user_name,
      zipcode: memberInfo.zipcode,
      address: addressParts[0] || '',
      detailAddress: addressParts[1] || '',
      phoneNumber1: memberInfo.phone.split('-')[0] || '',
      phoneNumber2: memberInfo.phone.split('-')[1] || '',
      phoneNumber3: memberInfo.phone.split('-')[2] || '',
      emailId: memberInfo.email.split('@')[0] || '',
      emailDomain: memberInfo.email.split('@')[1] || ''
    });
  };

  const handleSameAddressClick = async () => {
    await originMemberInfo();
  };

  const handleNewAddressClick = () => {
    setOrderFormData({
      userName: "",
      zipcode: "",
      address: "",
      detailAddress: "",
      phoneNumber1: "",
      phoneNumber2: "",
      phoneNumber3: "",
      emailId: "",
      emailDomain: "",
    });
  };

  useEffect(() => {
    if (userId) {
      originMemberInfo();
    }
  }, [userId]);



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
      <div>
  <p className="order-subcontent">배송지</p>
  <div className="order-address">
    <input
      id="sameaddr0"
      name="sameaddr"
      type="radio"
      value="originOrder"
      defaultChecked
      autoComplete="off"
      onClick={handleSameAddressClick}
    />
    <label htmlFor="sameaddr0">회원 정보와 동일</label>
    <input
      id="sameaddr1"
      name="sameaddr"
      type="radio"
      value="newOrder"
      autoComplete="off"
      onClick={handleNewAddressClick}
    />
    <label htmlFor="sameaddr1">새로운 배송지</label>
  </div>
</div>
      <div>
      <div className="order-receiver">
          <span>받는 사람 *</span>
          <input
            type="text"
            value={orderFormData.userName}
            onChange={handleChange}
            name="userName"
          />
        </div>
        <div className="order-addressform">
          <span>주소 *</span>
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
        <div className="order-phonenumber">
          <span>전화번호 *</span>
          <input
            type="text"
            value={orderFormData.phoneNumber1}
            onChange={handleChange}
            name="phoneNumber1"
          />-
          <input
            type="text"
            value={orderFormData.phoneNumber2}
            onChange={handleChange}
            name="phoneNumber2"
          />-
          <input
            type="text"
            value={orderFormData.phoneNumber3}
            onChange={handleChange}
            name="phoneNumber3"
          />
        </div>
        <div className="order-email">
          <span>이메일 *</span>
          <input
            type="text"
            className="order-email first"
            value={orderFormData.emailId}
            onChange={handleChange}
            name="emailId"
          />
          <span className="order-email at">@</span>
          <input
            type="text"
            value={orderFormData.emailDomain}
            onChange={handleChange}
            name="emailDomain"
          />
        </div>
      </div>
      <div>
        <p className="order-subcontent">
          <span>주문상품</span>
        </p>
      </div>
      <div className="order-product">
        <table>
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
        </table>
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
        <div>
          <p>Point</p>
          <input type="text" />
        </div>
      </div>
      <div className="order-price">
        <p className="order-subcontent">결제정보</p>
        <div>
          <span>주문상품</span>
          <span>{totalPrice.toLocaleString()} krw</span>
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
              checked="checked"
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
              autoComplete="off"
            />
            <label htmlFor="addr_paymethod4">카카오페이</label>
          </span>
        </div>
      </div>
      <div>
        <button type="button">25,000 krw 결제하기</button>
      </div>
    </div>
  </div>
);
}