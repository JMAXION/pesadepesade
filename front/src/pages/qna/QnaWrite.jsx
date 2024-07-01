import React, { useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";
import { useNavigate } from "react-router-dom";

export default function QnaWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [uccUrl, setUccUrl] = useState("");
  const [password, setPassword] = useState("");
  const [isSecret, setIsSecret] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      content,
      uccUrl,
      password,
      isSecret,
    });
  };

  const handlePrev = () => {
    navigate("/qna");
  };

  return (
    <div className="content">
      <SubTitle title="Q&A" />
      <form className="qna-form" onSubmit={handleSubmit}>
        <table className="qna-form-table">
          <tbody>
            <tr className="qna-form-group">
              <td>
                <label htmlFor="title">제목</label>
              </td>
              <td>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            </tr>
            <tr className="qna-form-group">
              <td>
                <label htmlFor="content">내용</label>
              </td>
              <td>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </td>
            </tr>
            <tr className="qna-form-group">
              <td>
                <label htmlFor="uccUrl">UCC URL</label>
              </td>
              <td>
                <input
                  type="text"
                  id="uccUrl"
                  value={uccUrl}
                  onChange={(e) => setUccUrl(e.target.value)}
                />
              </td>
            </tr>
            <tr className="qna-form-group">
              <td>
                <label htmlFor="password">비밀번호</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr className="qna-form-group">
              <td>비밀글설정</td>
              <td>
                <div className="qna-form-group-flex">
                  <input
                    type="radio"
                    id="public"
                    name="secret"
                    value="public"
                    checked={!isSecret}
                    onChange={() => setIsSecret(false)}
                  />
                  <p className="qna-form-group-flex type">공개글</p>
                  <input
                    type="radio"
                    id="secret"
                    name="secret"
                    value="secret"
                    checked={isSecret}
                    onChange={() => setIsSecret(true)}
                  />
                  <p className="qna-form-group-flex type">비밀글</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="qna-form-group-btn">
          <button type="submit">등록</button>
          <button type="button" onClick={handlePrev}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
