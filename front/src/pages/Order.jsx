import { useState, useRef, useEffect } from "react";
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
import OrderCouponModal from "../components/order/OrderCouponModal.jsx";
import { getUser } from "../util/localStorage";

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
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // 추가: 세부 내용 토글 상태
  const userId = getUser()?.userId;

  console.log("아디", userId);
  // 이름, 주소, 전화번호, 이메일
  const totalPrice = orderItem.reduce(
    (acc, item) => acc + item.pprice * item.qty,
    0
  );

  /*  const [isOpen, setIsOpen] = useState(false); */

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
  let totalprice = "";
  const handleDetailsToggle = () => {
    // 추가: 세부 내용 토글 함수
    setIsDetailsOpen(!isDetailsOpen);
  };

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
        <div>
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
