import React from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";

export default function QnaPassWord() {
  return (
    <div className="content">
      <SubTitle title={"Q&A"} />
      <div className="qna-password">
        <h3>비밀글보기</h3>
        <div className="qna-ps-info">
          <img src="https://img.echosting.cafe24.com/skin/mobile_ko_KR/board/ico_secret.png" />
          <p className="qna-ps-content">
            이 글은 비밀글입니다.
            <br />
            비밀번호를 입력하여 주세요.
          </p>
        </div>
        <p className="qna-ps">
          <input
            type="password"
            name="qformPs"
            // value={qnaFormData.qformPs}
            placeholder="숫자 4자리"
            maxLength={4}
          />
          <button type="button">확인</button>
        </p>
      </div>
    </div>
  );
}
