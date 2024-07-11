import React from "react";
import SubTitle from "../../components/SubTitle";

export default function InfoChangeStep1({ nextstep }) {
  return (
    <div>
      <SubTitle title="회원 정보 수정" />
      <div className="mypage-infochange">
        <p className="mypage-infochange-title">비밀번호 확인</p>
        <p className="mypage-infochange-text">
          홍길동 님의 회원정보를 안전하게 보호하기 위해 비밀번호를 한번 더
          확인해 주세요.
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
