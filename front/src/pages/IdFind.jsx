import { Link } from "react-router-dom";
import "../css/login.css";
import { useState } from "react";

export default function IdFind({
  formData,
  handleChange,
  handlePhoneChange,
  handleIdFind,
}) {
  const [selectedMethod, setSelectedMethod] = useState("useremail");

  const handleRadioChange = (event) => {
    setSelectedMethod(event.target.value);
    handleChange({ target: { name: "type", value: event.target.value } });
  };

  return (
    <div className="content">
      <div className="idfind">
        <h2 className="idfind-title">아이디 찾기</h2>
        <form className="idfind-container">
          <ul className="idfind-form-ul">
            <li className="idfind-form-group">
              <p className="idfind-form-label">회원구분</p>
              <div className="idfind-select">
                <select>
                  <option value="개인회원">개인회원</option>
                </select>
              </div>
            </li>
            <li className="idfind-form-group">
              <p className="idfind-form-label">인증방법</p>
              <div className="idfind-inputs">
                <input
                  type="radio"
                  name="authenticationMethod"
                  value="useremail"
                  checked={selectedMethod === "useremail"}
                  onChange={handleRadioChange}
                />
                이메일
                <input
                  type="radio"
                  name="authenticationMethod"
                  value="userphone"
                  checked={selectedMethod === "userphone"}
                  onChange={handleRadioChange}
                />
                휴대폰번호
              </div>
            </li>
            <li className="idfind-form-group">
              <p className="idfind-form-label">이름</p>
              <div className="idfind-input">
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>
            </li>
            {selectedMethod === "useremail" && (
              <li className="idfind-form-group">
                <p className="idfind-form-label">이메일</p>
                <div className="idfind-input">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </li>
            )}

            {selectedMethod === "userphone" && (
              <li className="idfind-form-group">
                <p className="idfind-form-label">휴대폰번호</p>
                <div className="idfind-input">
                  <div className="idfind-phone-input">
                    <input
                      type="text"
                      name="phoneNumber1"
                      value={formData.phoneNumber1}
                      onChange={handlePhoneChange}
                      maxLength="3"
                    />
                    -
                    <input
                      type="text"
                      name="phoneNumber2"
                      value={formData.phoneNumber2}
                      onChange={handlePhoneChange}
                      maxLength="4"
                    />
                    -
                    <input
                      type="text"
                      name="phoneNumber3"
                      value={formData.phoneNumber3}
                      onChange={handlePhoneChange}
                      maxLength="4"
                    />
                  </div>
                </div>
              </li>
            )}
          </ul>
          <button
            className="idfind-btn"
            type="button"
            onClick={() => {
              handleIdFind();
            }}
          >
            확인
          </button>
        </form>
      </div>
    </div>
  );
}
