import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../css/board.css";
import axios from "axios";
import { getUser } from "../../util/localStorage";

export default function QnaContent() {
  const userId = getUser();
  const user = userId ? userId.userId : null;
  const { qid, rno } = useParams();
  const [qna, setQna] = useState({});
  const [nextQna, setNextQna] = useState({});
  const [prevQna, setPrevQna] = useState({});
  const navigate = useNavigate();
  const [isSecret, setIsSecret] = useState(false); // 비밀글 여부 상태
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

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

  const handleNavigation = (targetQid, targetRno, isSecret) => {
    if (isSecret) {
      navigate(`/qna/password/${targetQid}/${targetRno}`);
    } else {
      navigate(`/qna/${targetQid}/${targetRno}`);
    }
  };

  useEffect(() => {
    const url = `http://localhost:8080/qna/comments/${qid}`;
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        setComments(result.data);
      })
      .catch((error) => console.log(error));
  }, [qid]);

  const handleAddComment = () => {
    if (user === null) {
      alert("로그인 후 댓글을 입력해주세요");
      return;
    }

    const url = "http://localhost:8080/qna/comments";
    const data = {
      qid: String(qid),
      userId: user,
      comment_text: newComment,
    };
    console.log(data);
    axios({
      method: "post",
      data: data,
      url: url,
    }).then((result) => {
      if (result.data.success) {
        setComments([
          {
            comment_id: result.data.commentId,
            userId: user,
            comment_text: newComment,
            created_at: new Date(),
          },
          ...comments,
        ]);
        setNewComment("");
      } else {
        console.error("Server error:", result.data.error);
      }
    });
  };

  const handleDeleteComment = (commentId, commentUserId) => {
    // 댓글 삭제 시 댓글 작성자와 현재 사용자 비교
    if (!userId || commentUserId !== userId.userId) {
      alert("자신이 작성한 댓글만 삭제할 수 있습니다.");
      return;
    }

    const url = `http://localhost:8080/qna/comments/${commentId}`;
    axios
      .delete(url)
      .then((response) => {
        if (response.data.success) {
          setComments(
            comments.filter((comment) => comment.comment_id !== commentId)
          );
        } else {
          console.error("Server error:", response.data.error);
        }
      })
      .catch((error) => console.error("Error deleting comment:", error));
  };

  const handleNavigate = (type) => {
    navigate(`/qna/${type}/${qna.qid}/${rno}`);
  };

  const handleDelete = () => {
    const url = "http://127.0.0.1:8080/qna/delete";
    axios({
      method: "delete",
      url: url,
      data: { qid: qid },
    })
      .then((result) => {
        if (result.data.cnt === 1) {
          alert("게시물을 삭제하시겠습니까?");
          navigate("/qna");
        }
      })
      .catch((error) => console.log(error));
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
                <span>{qna.user_id}</span>
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
              {userId && userId.userId === qna.user_id ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleNavigate("update")}
                  >
                    수정
                  </button>
                  <button type="button" onClick={handleDelete}>
                    삭제
                  </button>
                </>
              ) : (
                <p>작성자만 수정할 수 있습니다</p>
              )}
            </div>
            <div className="qna-comments">
              <h4>댓글</h4>
              <div className="comments-list">
                {comments.map((comment) => (
                  <div key={comment.comment_id} className="comment-item">
                    <div className="comment-user">{comment.user_id}</div>
                    <div className="comment-text">{comment.comment_text}</div>
                    <div className="comment-date">
                      {new Date(comment.created_at).toLocaleString()}
                    </div>
                    <button
                      onClick={() =>
                        handleDeleteComment(comment.comment_id, comment.user_id)
                      }
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
              <div className="comment-form">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="댓글을 입력하세요"
                />
                <button onClick={handleAddComment}>댓글 추가</button>
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
                {prevQna ? (
                  <p
                    onClick={() =>
                      handleNavigation(
                        prevQid,
                        prevRno,
                        prevQna.is_secret === 1
                      )
                    }
                  >
                    {prevQna.qtitle}
                  </p>
                ) : (
                  <p>이전 글이 없습니다.</p>
                )}
              </li>
              <li className="qna-next">
                <strong>다음글</strong>
                {nextQna ? (
                  <p
                    onClick={() =>
                      handleNavigation(
                        nextQid,
                        nextRno,
                        nextQna.is_secret === 1
                      )
                    }
                  >
                    {nextQna.qtitle}
                  </p>
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
