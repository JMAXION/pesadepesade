import "../../css/login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PasswordRetrievalForm({ formData }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userPassError, setUserPassError] = useState(false);
  const navigate = useNavigate();

  const validateUserPass = (password) => {
    const passRegEx =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,16}$/;
    if (!password || !passRegEx.test(password)) {
      setUserPassError(true);
      alert(
        "비밀번호는 대소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8자에서 16자 사이로 입력해 주세요."
      );
      return false;
    }
    setUserPassError(false);
    return true;
  };

  const handleUpdatePassword = () => {
    if (!validateUserPass(newPassword)) {
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const url = "http://127.0.0.1:8080/member/updatepassword";

    const data = {
      userId: formData.userId,
      newPassword: newPassword,
    };
    console.log("프론트", data);
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          alert("비밀번호가 성공적으로 업데이트되었습니다.");
          setNewPassword("");
          setConfirmPassword("");
          navigate("/login");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="content">
      <div className="passwordretrievalform">
        <h2 className="password-title">비밀번호 찾기</h2>

        <div className="passwordretrievalform-box">
          <strong style={{ fontSize: "20px" }}>
            인증에 성공하였습니다!🍓🍒🍑
          </strong>
          <p>사용하실 비밀번호를 입력해 주세요.</p>
          <div className="passwordretrievalform-div">
            <p>새 비밀번호</p>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          {userPassError && (
            <div
              className="passwordretrievalform-div"
              style={{
                height: "35px",
                textAlign: "right",
                padding: "0px 10px 10px 150px",
                margin: "0px",
              }}
            >
              <div
                className="step2-error"
                style={{ fontSize: "9px", margin: "0", textAlign: "left" }}
              >
                비밀번호는 대소문자, 숫자, 특수문자 중 3가지 <br />
                이상을 조합하여 8자에서 16자 사이로 입력해 주세요.
              </div>
            </div>
          )}

          <div className="passwordretrievalform-div">
            <p>비밀번호 확인</p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="passwordretrievalform-button">
          <button
            className="passwordretrievalform-btn"
            type="button"
            onClick={handleUpdatePassword}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
