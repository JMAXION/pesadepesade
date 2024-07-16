import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getUser } from "../../util/localStorage";

export default function QnaList() {
  const navigate = useNavigate();
  const [qnaList, setQnaList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pagesToShow = 5; // 한 번에 보여줄 페이지 버튼 수
  const userId = getUser();
  const user = userId ? userId.userId : null;

  useEffect(() => {
    const url = "http://localhost:8080/qna/list";
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        // 데이터를 rno 값에 따라 내림차순으로 정렬
        const sortedList = result.data.sort((a, b) => b.rno - a.rno);
        console.log(sortedList);
        setQnaList(sortedList);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdateQHits = (qid, rno, isSecret) => {
    if (isSecret) {
      navigate(`/qna/password/${qid}/${rno}`);
    } else {
      const url = "http://localhost:8080/qna/updateQhits";
      axios({
        method: "post",
        url: url,
        data: { qid: qid },
      })
        .then((result) => {
          if (result.data.cnt === 1) {
            navigate(`/qna/${qid}/${rno}`);
          } else {
            console.log("조회수 올리기 실패");
          }
        })
        .catch((error) => {
          console.error("조회수 업데이트 요청 실패:", error);
        });
    }
  };

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 qna수 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = qnaList.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(qnaList.length / itemsPerPage);

  // 페이지 범위 계산 함수
  const getPageRange = () => {
    const startPage =
      Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);
    return { startPage, endPage };
  };

  const { startPage, endPage } = getPageRange();
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handleWrite = () => {
    if (user === null) {
      alert("로그인 후 사용해주세요");
      navigate("/login");
    } else navigate("/qna/qnaWrite");
    return;
  };

  return (
    <div className="front">
      <div className="content">
        <SubTitle title="Q&A" />
        <div className="board">
          <div className="qna-list">
            <ul>
              {currentItems.map((list) => (
                <li
                  key={list.qid}
                  onClick={() => {
                    handleUpdateQHits(list.qid, list.rno, list.is_secret);
                  }}
                >
                  <Link to={`/qna/${list.qid}/${list.rno}`}>
                    <div className="qna-summary">
                      <div className="qna-row top">
                        <div className="qna-left">{list.rno}</div>
                        <span>{list.user_id}</span>
                      </div>
                      <div className="qna-row bottom">
                        <strong>
                          {list.is_secret === 1 && (
                            <img
                              src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                              alt="비밀글"
                            />
                          )}
                          <span className="subject-text">{list.qtitle}</span>
                        </strong>
                        <span>{list.qdate}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pagination">
              {startPage > 1 && (
                <button
                  className="page-button"
                  onClick={() => handlePageChange(startPage - 1)}
                >
                  &lt;
                </button>
              )}
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  className={`page-button ${
                    currentPage === number ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              ))}
              {endPage < totalPages && (
                <button
                  className="page-button"
                  onClick={() => handlePageChange(endPage + 1)}
                >
                  &gt;
                </button>
              )}
            </div>
            <div className="qna-btn">
              <button
                className="qna-btn-write"
                type="button"
                onClick={handleWrite}
              >
                Write
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
