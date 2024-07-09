import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../css/board.css";
import axios from "axios";

export default function QnaContent() {
  const userId = "test";
  const { qid, rno } = useParams();
  const [qna, setQna] = useState({});
  const [nextQna, setNextQna] = useState({});
  const [prevQna, setPrevQna] = useState({});
  const [isSecret, setIsSecret] = useState(false); // 비밀글 여부 상태
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:8080/qna/${qid}`;
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        setQna(result.data);
        setIsSecret(result.data.is_secret === 1); // 비밀글 여부 설정
      })
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
          setNextQna(result.data[0]); // 배열일 경우 첫 번째 요소로
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

  const prevQid = parseInt(qid) - 1;
  const nextQid = parseInt(qid) + 1;
  const prevRno = parseInt(rno) - 1;
  const nextRno = parseInt(rno) + 1;

  // 비밀번호 입력 후 확인 함수
  const handlePasswordSubmit = () => {
    // 비밀번호가 맞으면 해당 페이지로 이동
    navigate(`/qna/${qid}/${rno}`);
  };

  return (
    <div className="front">
      <div className="content">
        <SubTitle title="Q&A" />
        <div className="board">
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
              {/* 비밀글일 경우 */}
              {isSecret ? (
                <div className="qna-content-secret">
                  <p>비밀글입니다. 비밀번호를 입력하세요.</p>
                  <Link to={`/qna/password/${qid}/${rno}`}>
                    <button className="qna-password-btn">비밀번호 입력</button>
                  </Link>
                </div>
              ) : (
                <div className="qna-content">
                  <p>{qna.qcontent}</p>
                </div>
              )}
            </div>
            <div className="qna-foot">
              <Link to="/qna">
                <div className="qna-content-btn">목록보기</div>
              </Link>
            </div>
            <ul className="qna-page">
              <li className="qna-prev">
                <strong>이전글</strong>
                {prevQna ? (
                  <Link to={`/qna/${prevQid}/${prevRno}`}>
                    <p>{prevQna.qtitle}</p>
                  </Link>
                ) : (
                  <p>이전 글이 없습니다.</p>
                )}
              </li>
              <li className="qna-next">
                <strong>다음글</strong>
                {nextQna ? (
                  <Link to={`/qna/${nextQid}/${nextRno}`}>
                    <p>{nextQna.qtitle}</p>
                  </Link>
                ) : (
                  <p>다음 글이 없습니다.</p>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
