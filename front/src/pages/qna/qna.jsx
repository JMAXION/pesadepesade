import React from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";
import { Link } from "react-router-dom";

export default function qna() {
  return (
    <div className="content">
      <SubTitle title="Q&A" />
      <div className="qna-list">
        <ul>
          <li>
            <Link to="/qna/qnaContent">
              <div className="qna-summary">
                <div className="qna-row top">
                  <div className="qna-left">3</div>
                  <span>작성자</span>
                </div>
                <div className="qna-row bottom">
                  <strong>
                    <img
                      src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                      alt="비밀글"
                    />
                    <span class="subject-text">문의합니다.</span>
                  </strong>
                  <span>2024-07-01</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="qna-summary">
              <div className="qna-row top">
                <div className="qna-left">2</div>
                <span>작성자</span>
              </div>
              <div className="qna-row bottom">
                <strong>
                  <img
                    src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                    alt="비밀글"
                  />
                  <span class="subject-text">문의합니다.</span>
                </strong>
                <span>2024-07-01</span>
              </div>
            </div>
          </li>
          <li>
            <div className="qna-summary">
              <div className="qna-row top">
                <div className="qna-left">1</div>
                <span>작성자</span>
              </div>
              <div className="qna-row bottom">
                <strong>
                  <img
                    src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                    alt="비밀글"
                  />
                  <span class="subject-text">문의합니다.</span>
                </strong>
                <span>2024-07-01</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
