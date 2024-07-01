import React from "react";
import SubTitle from "../../components/SubTitle";
import { Link } from "react-router-dom";
import "../../css/board.css";

export default function QnaContent() {
  return (
    <div className="content">
      <SubTitle title="Q&A" />
      <div className="qna-container">
        <div className="qna-head">
          <h3>문의글 남깁니다</h3>
          <div className="qna-info">
            <span>작성자</span>
          </div>
          <div className="qna-append">
            <span>2024-07-01</span>
            <span>|</span>
            <span>조회 1</span>
          </div>
        </div>
        <div className="qna-body">
          <div className="qna-content">
            <p>안녕하세요. 문의 남깁니다. 주문건 배송 언제 될까요?</p>
          </div>
        </div>
        <div className="qna-foot">
          <Link to="/qna">
            <div className="qna-content-btn">목록보기</div>
          </Link>
        </div>
        <ul className="qna-page">
          <li className="qna-prev">
            <strong>이전글</strong>
            <p>일본 잡지"GINZA"사진 제공 의뢰</p>
          </li>
          <li className="qna-next">
            <strong>다음글</strong>
            <p>배송 문의 합니다</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
