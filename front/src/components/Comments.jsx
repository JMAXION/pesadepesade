import { React, useState, useEffect } from "react";
import { getUser } from "../util/localStorage";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Comments() {
  const userId = getUser();
  const user = userId ? userId.userId : null;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { qid, rno } = useParams();

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

    axios({
      method: "post",
      data: data,
      url: url,
    }).then((result) => {
      if (result.data.success) {
        setComments([
          {
            comment_id: result.data.commentId,
            user_id: user, // 여기서 user_id를 제대로 설정
            comment_text: newComment,
            created_at: new Date().toISOString(), // ISO 형식으로 설정
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

  return (
    <div>
      {" "}
      <div className="qna-comments">
        <h4 className="qna-comments h4">댓글</h4>
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.comment_id} className="comment-item">
              <div className="comment-user">{comment.user_id}</div>
              <div className="comment-body">
                <div className="comment-text">{comment.comment_text}</div>
                <div className="comment-date">
                  {new Date(comment.created_at).toLocaleString()}
                </div>
              </div>
              <button
                className="comment-btn"
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
            className="qna-comments textarea"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <div className="qna-comments-btn">
            <button
              className="qna-comments-btn button"
              onClick={handleAddComment}
            >
              댓글 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
