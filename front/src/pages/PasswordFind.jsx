import "../css/login.css";
import { useEffect, useState } from "react";

export default function PasswordFind({
  nextStep,
  formData,
  handleChange,
  handlePhoneChange,
}) {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [time, setTime] = useState(180);
  const [showAccreditation, setShowAccreditation] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleAccreditationClick = () => {
    setShowAccreditation(true);
    setTime(180);
  };

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  console.log("nextddd ==>", nextStep);

  return (
    <div className="content">
      <div className="password">
        <h2 className="password-title">비밀번호 찾기</h2>
        <form className="password-container">
          <ul className="password-form-ul">
            <li className="password-form-group">
              <p className="password-form-label">회원구분</p>
              <div className="password-select">
                <select>
                  <option value="개인회원">개인회원</option>
                </select>
              </div>
            </li>
            <li className="password-form-group">
              <p className="password-form-label">인증방법</p>
              <div className="password-inputs">
                <input
                  type="radio"
                  name="authenticationMethod"
                  value="email"
                  checked={selectedMethod === "email"}
                  onChange={handleRadioChange}
                />
                이메일
                <input
                  type="radio"
                  name="authenticationMethod"
                  value="phone"
                  checked={selectedMethod === "phone"}
                  onChange={handleRadioChange}
                />
                휴대폰번호
              </div>
            </li>
            <li className="password-form-group">
              <p className="password-form-label">아이디</p>
              <div className="password-input password-input-id">
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                />
              </div>
            </li>
            <li className="password-form-group">
              <p className="password-form-label">이름</p>
              <div className="password-input">
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>
            </li>
            {selectedMethod === "email" && (
              <li className="password-form-group">
                <p className="password-form-label">이메일</p>
                <div className="password-input">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </li>
            )}
            {selectedMethod === "phone" && (
              <li className="password-form-group">
                <p className="password-form-label">휴대폰번호</p>
                <div className="password-input">
                  <div className="password-phone-input">
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

            {showAccreditation && (
              <li className="password-form-group">
                <p className="password-form-label">인증번호</p>
                <div className="password-input">
                  <div className="password-phone-input">
                    <input style={{ width: "190px" }} />
                    <p style={{ color: "red", fontWeight: "300" }}>
                      {formatTime(time)}
                    </p>
                  </div>
                </div>
              </li>
            )}
          </ul>
          <button
            className="password-btn"
            type="button"
            onClick={handleAccreditationClick}
          >
            확인
          </button>
          <button className="password-btn" type="button" onClick={nextStep}>
            확인
          </button>
        </form>
      </div>
    </div>
  );
}
