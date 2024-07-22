import React from "react";
import SubTitle from "../../components/SubTitle";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "../../util/localStorage";

export default function InfoChangeStep1({ nextstep }) {
  const userId = getUser().userId;

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
          <input type="password" className="mypage-infochange-input" />
          <button className="mypage-infochange-button" onClick={nextstep}>
            확인
          </button>
        </p>
      </div>
    </div>
  );
}
