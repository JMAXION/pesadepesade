import React, { useState, useRef } from "react";
import DaumPostcode from "react-daum-postcode";

export default function OrderTable() {
  const [isOpen, setIsOpen] = useState(false);
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
  const handleAddress = (e) => {
    setOrderFormData({
      ...orderFormData,
      zipcode: e.zipcode,
      address: e.address,
    });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <tbody>
        <td>
          <div>
            <div>
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
          <div>
            <span>전화번호 *</span>
            <input type="text" />-
            <input type="text" />-
            <input type="text" />
          </div>
          <div>
            <span>이메일 *</span>
            <input type="text" />@
            <input type="text" />
          </div>
        </td>
      </tbody>
    </div>
  );
}
