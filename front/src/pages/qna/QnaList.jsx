import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function QnaList() {
  const navigate = useNavigate();
  const [qnaList, setQnaList] = useState([]);
  const userId = "test";

  useEffect(() => {
    const url = "http://localhost:8080/qna/list";
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        // 데이터를 rno 값에 따라 내림차순으로 정렬
        const sortedList = result.data.sort((a, b) => b.rno - a.rno);
        setQnaList(sortedList);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdateQHits = (qid, rno) => {
    // alert(qid);
    const url = "http://localhost:8080/qna/updateQhits";
    try {
      axios({
        method: "post",
        url: url,
        data: { qid: qid },
      }).then((result) => {
        if (result.data.cnt === 1) navigate(`/qna/${qid}/${rno}`);
        console.log("result", result.data.cnt);
      });
    } catch (error) {}
  };

  return (
    <div className="front">
      <div className="content">
        <SubTitle title="Q&A" />
        <div className="qna-list">
          <ul>
            {qnaList.map((list) => (
              <li
                onClick={() => {
                  handleUpdateQHits(list.qid, list.rno);
                }}
              >
                <Link to={`/qna/${list.qid}/${list.rno}`}>
                  <div className="qna-summary">
                    <div className="qna-row top">
                      <div className="qna-left">{list.rno}</div>
                      <span>{userId}</span>
                    </div>
                    <div className="qna-row bottom">
                      <strong>
                        <img
                          src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                          alt="비밀글"
                        />
                        <span class="subject-text">{list.qtitle}</span>
                      </strong>
                      <span>{list.qdate}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="qna-btn">
            <button className="qna-btn-write" type="button">
              <Link to="/qna/qnaWrite">Write</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
