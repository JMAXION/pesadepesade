import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/order.css";
import DaumPostcode from "react-daum-postcode";
import OrderCouponModal from "../components/order/OrderCouponModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { getUser } from "../util/localStorage";
import axios from "axios";
import { setUserInfo } from "../reducers/memberReducer.js";
export default function Order() {
  const location = useLocation();
  const { orderItem } = location.state || { orderItem: [] };
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [couponPrice, setCouponPrice] = useState(0);
  const userInfo = getUser();
  const coupons = [
    {
      id: 1,
      name: "회원가입 쿠폰",
      discount: 3000,
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
      discount: 5000,
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
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  month = month + 1;
  if (month < 10) month = "0" + month;

  let day = today.getDate();
  if (day < 10) day = "0" + day;
  let hour = today.getHours();
  let minute = today.getMinutes();

  const orderNumber =
    year + "" + month + "" + day + userInfo.userId + hour + "" + minute;

  const totalPrice = orderItem.reduce(
    (acc, item) => acc + item.pprice * item.qty,
    0
  );

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

  const [orderInfo, setOrderInfo] = useState({
    orderNumber: orderNumber,
    userId: userInfo.userId,
    totalPrice: totalPrice - couponPrice,
    zipcode: "",
    address: "",
    detailAddress: "",
    orderItem: orderItem,
  });

  // const calculateTotalPrice = (items) => {
  //   if (!Array.isArray(items)) {
  //     console.error("items is not an array:", items);
  //     return 0;
  //   }
  //   return items.reduce((acc, item) => acc + (item.tprice || 0), 0)-couponPrice;
  // };

  // const total = calculateTotalPrice(orderItem);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // 추가: 세부 내용 토글 상태
  const userId = getUser()?.userId;

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

  const couponDiscount = (price) => {
    console.log("orderprice-->", price);
    setCouponPrice(price);
  };

  const handleDetailsToggle = () => {
    // 추가: 세부 내용 토글 함수
    setIsDetailsOpen(!isDetailsOpen);
  };

  //회원 정보 서버에서 불러오기
  const fetchMemberInfo = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/order/info/${userId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //불러온 주소와 번호를 나누기
  const originMemberInfo = async () => {
    const memberInfo = await fetchMemberInfo();
    if (!memberInfo) return;

    const addressParts = memberInfo.address.split(" / ");

    setOrderFormData({
      userName: memberInfo.user_name,
      zipcode: memberInfo.zipcode,
      address: addressParts[0] || "",
      detailAddress: addressParts[1] || "",
      phoneNumber1: memberInfo.phone.split("-")[0] || "",
      phoneNumber2: memberInfo.phone.split("-")[1] || "",
      phoneNumber3: memberInfo.phone.split("-")[2] || "",
      emailId: memberInfo.email.split("@")[0] || "",
      emailDomain: memberInfo.email.split("@")[1] || "",
    });

    setOrderInfo({
      ...orderInfo,
      zipcode: memberInfo.zipcode,
      address: addressParts[0] || "",
      detailAddress: addressParts[1] || "",
    });
  };

  // 회원정보와 동일 클릭
  const handleSameAddressClick = async () => {
    await originMemberInfo();
  };

  // 새 배송지: 직접입력
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

  // 첫 랜더링시 회원정보 불러우기
  useEffect(() => {
    if (userId) {
      originMemberInfo();
    }
  }, [userId /* ,couponPrice,totalPrice,orderFormData */]);

  const order = () => {
    const url1 = `http://127.0.0.1:8080/order/create`;
    const url2 = `http://127.0.0.1:8080/order/orderdetail`;
    const url3 = `http://127.0.0.1:8080/cart/delete`;

    // 첫 번째 axios 호출
    axios({
      method: "POST",
      url: url1,
      data: orderInfo,
    })
      .then((result) => {
        if (result.data.cnt === 1) {
          alert("insert ok");
        }
      })
      .catch((error) => {
        console.error("Error in first axios call:", error);
      });

    // 두 번째 axios 호출
    axios({
      method: "POST",
      url: url2,
      data: orderInfo,
    })
      .then((result) => {
        if (result.data.cnt === 1) {
          alert("insert ok2");
        }
      })
      .catch((error) => {
        console.error("Error in second axios call:", error);
      });

    axios({
      method: "POST",
      url: url3,
      data: orderInfo,
    })
      .then((result) => {
        if (result.data.cnt === 1) {
          alert("delete ok");
        }
      })
      .catch((error) => {
        console.error("Error in second axios call:", error);
      });
  };

  return (
    <div className="front">
      <div className="order-page">
        <div className="order-header">
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
          <span>pesade</span>
          <Link to={"/mypage"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>{" "}
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

        <tbody>
          <tr>
            <th>받는 사람 *</th>
            <td>
              <input
                type="text"
                value={orderFormData.userName}
                onChange={handleChange}
                name="userName"
              />
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
              <input
                type="text"
                value={orderFormData.phoneNumber1}
                onChange={handleChange}
                name="phoneNumber1"
              />
              -
              <input
                type="text"
                value={orderFormData.phoneNumber2}
                onChange={handleChange}
                name="phoneNumber2"
              />
              -
              <input
                type="text"
                value={orderFormData.phoneNumber3}
                onChange={handleChange}
                name="phoneNumber3"
              />
            </td>
          </tr>
          <tr className="order-email">
            <th>이메일 *</th>
            <td>
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
                className="order-email domain"
                value={orderFormData.emailDomain}
                onChange={handleChange}
                name="emailDomain"
              />
            </td>
          </tr>
        </tbody>

        <div>
          <p className="order-subcontent">
            <span>주문상품</span>
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
            <div className="order-coupon-div">
              <span>쿠폰 할인</span>
              <span>{couponPrice}krw</span>
              <button type="button" onClick={() => openModal()}>
                쿠폰 적용
              </button>
            </div>
            <p className="order-coupon-p">보유 쿠폰: {coupons.length}개</p>
            {isModalOpen && (
              <OrderCouponModal
                onClose={closeModal}
                couponDiscount={couponDiscount}
              />
            )}
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

        <div className="order-price">
          <p className="order-subcontent">결제정보</p>
          <tbody className="order-price">
            <div>
              <th>주문상품</th>
              <td>{totalPrice.toLocaleString()} krw</td>
            </div>
            <div>
              <th>배송비</th>
              <td>+0 krw</td>
            </div>
            <div>
              <th>할인/부가결제</th>
              <td>
                <span>-{couponPrice}</span> krw
              </td>
            </div>
            <div>
              <p className="order-subcontent">최종 결제 금액</p>
              <span> {totalPrice - couponPrice} krw</span>
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
          <Link to="/orderok" state={{ orderInfo, orderItem }}>
            <button type="button" onClick={order}>
              {(totalPrice - couponPrice).toLocaleString()} krw 결제하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
