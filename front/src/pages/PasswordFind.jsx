import "../css/login.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PasswordFind({
  formData,
  handleChange,
  handlePhoneChange,
}) {
  const [selectedMethod, setSelectedMethod] = useState("useremail");
  const [time, setTime] = useState(180);
  const [showAccreditation, setShowAccreditation] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleRadioChange = (event) => {
    setSelectedMethod(event.target.value);
    handleChange({ target: { name: "type", value: event.target.value } });
  };

  const handlePasswordFind = () => {
    const url = "http://127.0.0.1:8080/member/passwordfind";

    axios({
      method: "post",
      url: url,
      data: formData,
    })
      .then((res) => {
        if (res.data.cnt) {
          setShowAccreditation(true);
          setTime(180);
        } else {
          alert("사용자를 찾을 수 없습니다.");
        }
      })
      .catch((error) => console.log(error));
  };
  const handleAccreditationClick = async () => {
    handlePasswordFind();
    // if (selectedMethod === "useremail") {
    //   try {
    //     const response = await axios.post(
    //       "http://127.0.0.1:8080/member/sendmail",
    //       {
    //         userId: formData.userId,
    //         email: formData.email,
    //       }
    //     );
    //     console.log("Email sent: ", response.data);
    //     alert("인증번호를 전송하였습니다. 이메일을 확인해 주세요.");
    //   } catch (error) {
    //     console.error("Error sending email: ", error);
    //   }
    // }
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

  const handleVerifyCode = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/member/verifycode",
        {
          verificationCode: verificationCode,
        }
      );

      if (response.data.success) {
        alert("인증 성공! 새로운 비밀번호를 입력하세요.");
        setShowAccreditation(false);
      } else {
        alert("인증 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error verifying code인증번호코드: ", error);
    }
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };
  // console.log("nextddd ==>", nextStep);

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
            {selectedMethod === "useremail" && (
              <li className="password-form-group">
                <p className="password-form-label">이메일</p>
                <div className="password-input">
                  <input
                    style={{ width: "189px" }}
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <button
                    style={{ width: "65px", margin: 0, marginLeft: "5px" }}
                    className="password-btn"
                    type="button"
                    onClick={handleAccreditationClick}
                  >
                    전송
                  </button>
                </div>
              </li>
            )}
            {selectedMethod === "userphone" && (
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
                    <button
                      style={{ width: "45px", margin: 0, marginLeft: "1px" }}
                      className="password-btn"
                      type="button"
                      onClick={handleAccreditationClick}
                    >
                      전송
                    </button>
                  </div>
                </div>
              </li>
            )}

            {showAccreditation && (
              <li className="password-form-group">
                <p className="password-form-label">인증번호</p>
                <div className="password-input">
                  <div className="password-phone-input">
                    <input
                      style={{ width: "190px" }}
                      value={verificationCode}
                      onChange={handleVerificationCodeChange}
                    />
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
            onClick={handleVerifyCode}
          >
            확인
          </button>
        </form>
      </div>
    </div>
  );
}
