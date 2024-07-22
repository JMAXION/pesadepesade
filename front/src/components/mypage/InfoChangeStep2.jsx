import React, { useState, useRef } from "react";
import SubTitle from "../SubTitle";
import DaumPostcode from "react-daum-postcode";

export default function InfoChangeStep2() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    userPass: "",
    userPassCheck: "",
    userName: "",
    zipcode: "",
    address: "",
    detailAddress: "",
    phoneNumber1: "010",
    phoneNumber2: "",
    phoneNumber3: "",
    emailId: "",
    emailDomain: "",
    phoneNumber1: "010",
    phoneNumber2: "",
    gender: "",
    birthDate: "solar",
    year: "",
    month: "",
    day: "",
  });
  const refs = {
    userIdRef: useRef(null),
    userPassRef: useRef(null),
    userPassCheckRef: useRef(null),
    userNameRef: useRef(null),
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
    detailAddressRef: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    phoneNumber3Ref: useRef(null),
    emailIdRef: useRef(null),
    emailDomainRef: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const changeEmailDomain = (e, refs, handleChange) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const name = e.target.name;
    const value = e.target.value;

    if (value === "self") {
      refs.emailDomainRef.current.value = "";
      refs.emailDomainRef.current.focus();
    } else {
      refs.emailDomainRef.current.value = value;
    }
    handleChange(e);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  //---- DaumPostcode 관련 디자인 및 이벤트 시작 ----//
  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };

  const postCodeStyle = {
    width: "360px",
    height: "480px",
  };

  const completeHandler = (data) => {
    const { address, zonecode } = data;
    handleAddress({ zipcode: zonecode, address: address });
  };
  const handleAddress = (e) => {
    setFormData({ ...formData, zipcode: e.zipcode, address: e.address });
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

  return (
    <div className="content">
      <div className="editprofile">
        <SubTitle title="Edit Profile" />
        <table className="editprofile-table">
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputmain"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                ref={refs.userIdRef}
              />
            </td>
          </tr>
          <tr>
            {/*      <td>현재 비밀번호</td>
            <td>
              <input
                type="password"
                className="editprofile-table-inputmain"
                name="userPass"
                value={formData.userPass}
                onChange={handleChange}
                ref={refs.userPassRef}
              />
            </td> */}
          </tr>
          <tr>
            <td>새 비밀번호</td>
            <td>
              <input
                type="password"
                className="editprofile-table-inputmain"
                name="userPass"
                value={formData.userPass}
                onChange={handleChange}
                ref={refs.userPassRef}
              />
            </td>
          </tr>
          <tr>
            <td>새 비밀번호 확인</td>
            <td>
              <input
                type="password"
                className="editprofile-table-inputmain"
                name="userPassCheck"
                value={formData.usePassCheck}
                onChange={handleChange}
                ref={refs.userPassCheckRef}
              />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputmain"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                ref={refs.userNameRef}
              />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td className="editprofile-address-td">
              <input
                type="text"
                className="editprofile-table-inputsub"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="우편번호"
              />
              <button
                className="editprofile-table-inputbutton"
                onClick={handleToggle}
              >
                주소검색
              </button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputmain"
                name="address"
                value={formData.address}
                ref={refs.addressRef}
                placeholder="기본주소"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputmain"
                name="detailAddress"
                value={formData.detailAddress}
                onChange={handleChange}
                ref={refs.detailAddressRef}
                placeholder="나머지 주소(선택 입력 가능)"
              />
            </td>
            {isOpen && (
              <div>
                <DaumPostcode
                  className="postmodal editprofile-postmodal "
                  theme={themeObj}
                  style={postCodeStyle}
                  onComplete={completeHandler}
                  onClose={closeHandler}
                />
              </div>
            )}
          </tr>
          <tr>
            <td>휴대전화</td>
            <td>
              <select
                className="editprofile-table-inputsubsub"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
              >
                <option value="">010</option>
              </select>{" "}
              -{" "}
              <input
                type="text"
                className="editprofile-table-inputsubsub"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                ref={refs.phoneNumber2Ref}
                maxLength="4"
              />{" "}
              -{" "}
              <input
                type="text"
                className="editprofile-table-inputsubsub"
                name="phoneNumber3"
                value={formData.phoneNumber3}
                onChange={handleChange}
                ref={refs.phoneNumber3Ref}
                maxLength="4"
              />
            </td>
          </tr>
          <tr>
            <td>SMS 수신여부</td>
            <td>
              <input type="radio" name="receiveStatus" value="receive" />
              수신
              <input
                type="radio"
                name="receiveStatus"
                value="notReceive"
                style={{ marginLeft: "10px" }}
              />
              미수신
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputsubsub"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                ref={refs.emailIdRef}
              />
              @{" "}
              <input
                type="text"
                className="editprofile-table-inputsubsub"
                name="emailDomain"
                value={formData.emailDomain}
                onChange={handleChange}
                ref={refs.emailDomainRef}
              />{" "}
              <select
                name="emailDomain"
                onChange={(e) => changeEmailDomain(e, refs, handleChange)}
                className="editprofile-table-inputsubsubsub"
              >
                <option value="self">직접입력</option>
                <option value="naver.com">네이버</option>
                <option value="gmail.com">구글</option>
                <option value="hotmail.com">MS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>이메일 수신여부</td>
            <td>
              <input type="radio" name="receiveStatus" value="receive" />
              수신
              <input
                type="radio"
                name="receiveStatus"
                value="notReceive"
                style={{ marginLeft: "10px" }}
              />
              미수신
            </td>
          </tr>
          <tr>
            <td>성별</td>
            <td>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              남자
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                style={{ marginLeft: "10px" }}
              />
              여자
            </td>
          </tr>
          <tr>
            <td>생일</td>
            <td>
              <input
                type="radio"
                name="birthDate"
                value="solar"
                checked={formData.birthDate === "solar"}
                onChange={handleChange}
              />
              양력
              <input
                type="radio"
                name="birthDate"
                value="lunar"
                checked={formData.birthDate === "lunar"}
                onChange={handleChange}
                style={{ marginLeft: "10px" }}
              />
              음력
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputsubsubsubsub"
                name="year"
                value={formData.year}
                onChange={handleChange}
                maxLength="4"
              />
              년
              <input
                type="text"
                className="editprofile-table-inputsubsubsubsub"
                name="month"
                value={formData.month}
                onChange={handleChange}
                maxLength="2"
              />
              월
              <input
                type="text"
                className="editprofile-table-inputsubsubsubsub"
                name="day"
                value={formData.day}
                onChange={handleChange}
                maxLength="2"
              />
              일
            </td>
          </tr>
        </table>

        <p className="profileedit-buttons">
          <button className="profileedit-button">Edit Account</button>
          <button className="profileedit-button">Delete Account</button>
          <button className="profileedit-button">Cancel</button>
        </p>
      </div>
    </div>
  );
}
