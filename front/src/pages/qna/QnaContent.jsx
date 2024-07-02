import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import { Link, useParams } from "react-router-dom";
import "../../css/board.css";
import axios from "axios";

export default function QnaContent() {
  const userId = "test";
  const { qid, rno } = useParams();
  const [qna, setQna] = useState({});
  const [nextQna, setNextQna] = useState({});
  const [prevQna, setPrevQna] = useState({});

  useEffect(() => {
    const url = `http://localhost:8080/qna/${qid}`;
    axios({
      method: "get",
      url: url,
    })
      .then((result) => setQna(result.data))
      .catch((error) => console.error(error));
  }, [qid]);

  useEffect(() => {
    const url = `http://localhost:8080/qna/${qid}/next`;
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        if (result.data && result.data.length > 0) {
          setNextQna(result.data[0]); // 배열일 경우 첫 번째 요소로 접근
        } else {
          setNextQna(null);
        }
      })
      .catch((error) => console.log(error));
  }, [qid]);

  useEffect(() => {
    const url = `http://localhost:8080/qna/${qid}/prev`;
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        if (result.data && result.data.length > 0) {
          setPrevQna(result.data[0]);
        } else {
          setPrevQna(null);
        }
      })
      .catch((error) => console.log(error));
  }, [qid]);

  return (
    <div className="content">
      <SubTitle title="Q&A" />
      <div className="qna-container">
        <div className="qna-head">
          <h3>{qna.qtitle}</h3>
          <div className="qna-info">
            <span>{userId}</span>
          </div>
          <div className="qna-append">
            <span>{qna.qdate}</span>
            <span>|</span>
            <span>조회 {qna.qhits}</span>
          </div>
        </div>
        <div className="qna-body">
          <div className="qna-content">
            <p>{qna.qcontent}</p>
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
            <p>{prevQna.qtitle || "다음 글이 없습니다."}</p>
          </li>
          <li className="qna-next">
            <strong>다음글</strong>
            <p>{nextQna.qtitle || "다음 글이 없습니다."}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
