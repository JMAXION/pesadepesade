import React, { useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function QnaWrite() {
  const navigate = useNavigate();
  const { isSecret } = qnaFormData;

  const [qnaFormData, setQnaFormData] = useState({
    qtitle: "",
    qcontent: "",
    qformPs: "",
    isSecret: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQnaFormData({ ...qnaFormData, [name]: value });
  };

  console.log(qnaFormData);

  /* 등록 */
  const url = "http://127.0.0.1:8080/qna/new";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: url,
      data: qnaFormData,
    })
      .then((res) => {
        console.log(res.data.cnt);
        if (res.data.cnt === 1) {
          navigate("/qna");
        }
      })
      .catch((err) => {
        console.error(err);
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
                <label htmlFor="qtitle">제목</label>
              </td>
              <td>
                <input
                  type="text"
                  name="qtitle"
                  value={qnaFormData.qtitle}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="qna-form-group">
              <td>
                <label htmlFor="qcontent">내용</label>
              </td>
              <td>
                <textarea
                  name="qcontent"
                  value={qnaFormData.qcontent}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="qna-form-group">
              <td>비밀글설정</td>
              <td>
                <div className="qna-form-group-flex">
                  <input
                    type="radio"
                    name="isSecret"
                    value="false"
                    checked={!isSecret}
                    onChange={() =>
                      setQnaFormData({ ...qnaFormData, isSecret: false })
                    }
                  />
                  <p className="qna-form-group-flex type">공개글</p>
                  <input
                    type="radio"
                    name="isSecret"
                    value="true"
                    checked={isSecret}
                    onChange={() =>
                      setQnaFormData({ ...qnaFormData, isSecret: true })
                    }
                  />
                  <p className="qna-form-group-flex type">비밀글</p>
                </div>
              </td>
            </tr>
            {isSecret && ( // 비밀글일 경우에만 비밀번호 입력 필드 보이기
              <tr className="qna-form-group">
                <td>
                  <label htmlFor="qformPs">비밀번호</label>
                </td>
                <td>
                  <input
                    type="password"
                    name="qformPs"
                    // value={qnaFormData.qformPs}
                    onChange={handleChange}
                    placeholder="숫자 4자리"
                    maxLength={4}
                  />
                </td>
              </tr>
            )}
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
