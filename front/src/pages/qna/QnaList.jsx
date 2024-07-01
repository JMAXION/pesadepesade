import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function QnaList() {
  const [qnaList, setQnaList] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/qna";
    axios({
      method: "get",
      url: url,
    })
      .then((result) => setQnaList(result.data))
      .catch((error) => console.log(error));
  }, []);
  //   const qnaList = [
  //     {
  //       qid: 1,
  //       userId: "test",
  //       qContent: "문의합니다",
  //       qDate: "2024-07-01",
  //     },
  //   ];
  return (
    <div className="content">
      <SubTitle title="Q&A" />
      <div className="qna-list">
        <ul>
          {qnaList.map((list) => (
            <li>
              <Link to="/qna/qnaContent">
                <div className="qna-summary">
                  <div className="qna-row top">
                    <div className="qna-left">{list.qid}</div>
                    <span>{list.userId}</span>
                  </div>
                  <div className="qna-row bottom">
                    <strong>
                      <img
                        src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                        alt="비밀글"
                      />
                      <span class="subject-text">{list.qContent}</span>
                    </strong>
                    <span>{list.qDate}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}

          {/* <li>
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
          </li> */}
        </ul>
        <div className="qna-btn">
          <button className="qna-btn-write" type="button">
            <Link to="/qna/qnaWrite">Write</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
