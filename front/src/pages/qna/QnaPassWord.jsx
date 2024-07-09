import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";
import axios from "axios";

export default function QnaPassWord() {
  const { qid, rno } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = () => {
    const url = "http://localhost:8080/qna/checkPassword";
    axios({
      method: "post",
      url: url,
      data: { qid: qid, password: password },
    })
      .then((result) => {
        if (result.data.isValid) {
          updateQHits(qid); // 비밀번호가 일치하면 조회수 증가 함수 호출
          navigate(`/qna/${qid}/${rno}`);
        } else {
          alert("비밀번호가 일치하지 않습니다.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateQHits = (qid) => {
    const url = "http://localhost:8080/qna/updateQhits";
    axios({
      method: "post",
      url: url,
      data: { qid: qid },
    })
      .then((response) => {
        if (response.data.cnt === 1) {
          console.log("조회수가 올라갔습니다.");
        } else {
          console.log("조회수 올리기 실패");
        }
      })
      .catch((error) => {
        console.error("조회수 업데이트 실패:", error);
      });
  };

  return (
    <div className="front">
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
              value={password}
              onChange={handlePasswordChange}
              placeholder="숫자 4자리"
              maxLength={4}
            />
            <button type="submit" onClick={handlePasswordSubmit}>
              확인
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
