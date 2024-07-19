import React, { useEffect, useState } from "react";
import "../css/board.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../util/localStorage";

export default function Review() {
  const userId = getUser();
  const user = userId ? userId.userId : null;
  const { pid, rno } = useParams();
  const navigate = useNavigate();

  const [reviewList, setReviewList] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/review/list";
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        const sortedList = result.data.sort((a, b) => b.rno - a.rno);
        setReviewList(sortedList);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleWrite = (pid) => {
    if (user === null) {
      alert("로그인 후 사용해주세요");
      navigate("/login");
    } else navigate("/shop/detail/reviewWrite");
    return;
  };

  return (
    <>
      <div className="content">
        <div className="reviews">
          <p>review</p>
          <ul>
            {reviewList.map((review) => (
              <li>
                <div className="qna-summary">
                  <div className="qna-row top">
                    <div className="qna-left">{review.rno}</div>
                    <span>{review.user_id}</span>
                  </div>
                  <div className="qna-row bottom">
                    <strong>
                      <span className="subject-text">{review.rtitle}</span>
                    </strong>
                    <span>{review.rdate}</span>
                  </div>
                  {/* {expandedItems.includes("1") && (
                  <div className="qna-detail">
                    <p>여기에 세부 내용이 들어갑니다...</p>
                  </div>
                )} */}
                  <hr />
                </div>
              </li>
            ))}
          </ul>
          <button type="button" onClick={handleWrite}>
            write
          </button>
        </div>
      </div>
    </>
  );
}
