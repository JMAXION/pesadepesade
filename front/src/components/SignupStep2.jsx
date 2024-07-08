import "../css/signup.css";
import { useState, useRef } from "react";
import DaumPostcode from "react-daum-postcode";
import {
  validateCheckStep2,
  /*   passCheck */
  changeEmailDomain,
} from "../apis/validate";

export default function SignupStep2(
  nextStep,
  formData,
  handleChange,
  handleAddress
) {
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
  console.log("리액트폼", formData);
  console.log("리액트 넥스트", nextStep);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFF",
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
      <div className="step2">
        <h2 className="step2-title">회원가입</h2>

        {/* PROGRESS */}
        <div className="step2-progress-bar">
          <div className="step2-progress-item">
            <div className="step2-progress-circle step2-circle-white ">
              <span>✔</span>
            </div>
            <div className="step2-progress-name">약관동의</div>
          </div>
          <div className="step2-progress-item">
            <div className="step2-progress-circle step2-circle-black">
              <span>2</span>
            </div>
            <div className="step2-progress-name">정보입력</div>
          </div>
          <div className="step2-progress-item last-progress-item">
            <div className="step2-progress-circle">
              <span>3</span>
            </div>
            <div className="step2-progress-name">가입완료</div>
          </div>
        </div>

        {/* 회원인증 */}
        <div className="step2-titlearea">
          <h3>회원인증</h3>
        </div>
        <div className="step2-membertype">
          <input type="radio" checked />
          <label>개인회원</label>
        </div>

        {/* 기본정보 */}
        <div className="step2-titlearea">
          <h3>기본정보</h3>
          <span>- 필수</span>
        </div>
        <ul className="step2-ul">
          <li className="step2-member-li step2-member-li-id">
            <div className="step2-member-li-name">
              <span>*</span>
              <p className="step2-member-id-p">아이디</p>
            </div>
            <input
              className="step2-member-id-input"
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              ref={refs.userIdRef}
            />
            <button
              className="step2-idcheck-btn"
              type="button"
              /*     onClick={handleIdCheck} */
            >
              중복확인
            </button>
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>비밀번호</p>
            </div>
            <input
              type="password"
              name="userPass"
              value={formData.userPass}
              onChange={handleChange}
              ref={refs.userPassRef}
            />
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>비밀번호 확인</p>
            </div>
            <input
              type="password"
              name="userPassCheck"
              value={formData.usePassCheck}
              onChange={handleChange}
              ref={refs.userPassCheckRef}
            />
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>이름</p>
            </div>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              ref={refs.userNameRef}
            />
          </li>
          <li className="step2-member-address">
            <div className="step2-member-address-box">
              <div className="step2-member-li-name ">
                <p>주소</p>
              </div>
              <div className="step2-member-address-input">
                <input
                  className="step2-postcode"
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  placeholder="우편번호"
                />
                <button type="button" onClick={handleToggle}>
                  주소검색
                </button>
              </div>
            </div>
            <input
              className="step2-address-basic"
              type="text"
              name="address"
              value={formData.address}
              ref={refs.addressRef}
              placeholder="기본주소"
            />
            <br />
            <input
              className="step2-address-detail"
              type="text"
              name="detailAddress"
              onChange={handleChange}
              ref={refs.detailAddressRef}
              placeholder="나머지 주소(선택 입력 가능)"
            />

            {isOpen && (
              <div>
                <DaumPostcode
                  className="postmodal"
                  theme={themeObj}
                  style={postCodeStyle}
                  onComplete={completeHandler}
                  onClose={closeHandler}
                />
              </div>
            )}
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>휴대전화</p>
            </div>
            <div className="step2-member-phone-group">
              <select
                className="step2-member-phone"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
              >
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
                <option>019</option>
              </select>
              -
              <input
                className="step2-member-phone"
                type="text"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                ref={refs.phoneNumber2Ref}
              />
              -
              <input
                className="step2-member-phone"
                type="text"
                name="phoneNumber3"
                value={formData.phoneNumber3}
                onChange={handleChange}
                ref={refs.phoneNumber3Ref}
              />
            </div>
          </li>
          <li className="step2-member-li step2-member-li-email">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>이메일</p>
            </div>
            <div className="step2-member-email-group">
              <input
                className="step2-member-email"
                type="text"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                ref={refs.emailIdRef}
              />
              <span>@</span>
              <input
                className="step2-member-email"
                type="text"
                name="emailDomain"
                value={handleChange}
                onChange={handleChange}
                ref={refs.emailDomainRef}
              />
              <select
                name="emailDomain"
                onChange={(e) => changeEmailDomain(e, refs, handleChange)}
              >
                <option value="self">직접입력</option>
                <option value="naver.com">네이버</option>
                <option value="gmail.com">구글</option>
                <option value="hotmail.com">MS</option>
              </select>
            </div>
          </li>
        </ul>

        {/* 추가정보 */}
        <div className="step2-titlearea">
          <h3>추가정보</h3>
        </div>
        <div className="step2-additional-info">
          <div className="step2-member-gender">
            <div className="step2-member-li-name">
              <p>성별</p>
            </div>
            <div className="step2-gender-selection">
              <input
                className="step2-gender-input"
                type="radio"
                name="gender"
                value="male"
                /*   checked={formData.gender === "male"} */
                onChange={handleChange}
              />
              남자
              <input
                className="step2-gender-input"
                type="radio"
                name="gender"
                value="female"
                /*    checked={formData.gender === "female"} */
                onChange={handleChange}
              />
              여자
            </div>
          </div>

          <>
            <div className="step2-member-birthdate">
              <div className="step2-member-li-name">
                <p>생년월일</p>
              </div>
              <div className="step2-birthdate-selection">
                <input
                  className="step2-birthdate-input"
                  type="radio"
                  name="birthdate"
                  value="solar"
                  /*  checked={formData.birthdate === "solar"} */
                  onChange={handleChange}
                />
                양력
                <input
                  className="step2-birthdate-input"
                  type="radio"
                  name="birthdate"
                  value="lunar"
                  /*  checked={formData.birthdate === "lunar"} */
                  onChange={handleChange}
                />
                음력
              </div>
            </div>
            <div className="step2-date-input">
              <div className="step2-date">
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
                년
                <input
                  type="text"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                />
                월
                <input
                  type="text"
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                />
                일
              </div>
            </div>
          </>

          <button
            className="step2-submit-btn"
            type="button"
            onClick={() => validateCheckStep2(formData, refs, nextStep)}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}
