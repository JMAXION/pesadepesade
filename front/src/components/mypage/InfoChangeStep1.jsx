import React from "react";
import SubTitle from "../../components/SubTitle";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "../../util/localStorage";
import axios from "axios";
import { useState } from "react";

export default function InfoChangeStep1({ nextStep }) {
  const userId = getUser().userId;
  const [userPass, setUserPass] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setUserPass(value);
  };

  const handlePassConfirm = () => {
    const url = "http://127.0.0.1:8080/mypage/passconfirm";

    axios({
      method: "post",
      url: url,
      data: { userId, userPass },
    }).then((res) => {
      if (res.data) {
        alert("비밀번호가 맞았습니다.");
        nextStep(2);
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    });
  };

  return (
    <div>
      <SubTitle title="회원 정보 수정" />
      <div className="mypage-infochange">
        <p className="mypage-infochange-title">비밀번호 확인</p>
        <p className="mypage-infochange-main">
          <FontAwesomeIcon icon={faLock} className="mypage-infochange-icon" />
          <p>
            <p className="mypage-infochange-text">
              {userId}님의 회원정보를 안전하게 보호하기 위해 비밀번호를 한번 더
              확인해 주세요.
            </p>
          </p>
        </p>
        <p className="mypage-infochange-passwordinput">
          <input
            type="password"
            className="mypage-infochange-input"
            name="userPass"
            value={userPass}
            onChange={handleChange}
          />
          <button
            className="mypage-infochange-button"
            onClick={handlePassConfirm}
          >
            확인
          </button>
        </p>
      </div>
    </div>
  );
}
