import React from "react";
import { useState } from "react";
import SubTitle from "../../components/SubTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUser } from "../../util/localStorage";

export default function NoticeWrite() {
  const userId = getUser();
  const user = userId ? userId.userId : null;

  const navigate = useNavigate();

  const [ntcFormData, setNtcFormData] = useState({
    ntitle: "",
    ncontent: "",
    user_id: user,
  });

  /* 등록 */
  const url = "http://127.0.0.1:8080/notice/write";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: url,
      data: ntcFormData,
    })
      .then((res) => {
        if (res.data.cnt === 1) {
          navigate("/notice");
        } else {
          alert("관리자만 작성할 수 있습니다");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNtcFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePrev = () => {
    navigate("/notice");
  };

  return (
    <div className="front">
      <div className="content">
        <SubTitle title="Notice (admin)" />
        <form className="qna-form" onSubmit={handleSubmit}>
          <table className="qna-form-table">
            <tbody>
              <tr className="qna-form-group">
                <td>
                  <label htmlFor="ntitle">제목</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="ntitle"
                    value={ntcFormData.ntitle}
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
                    name="ncontent"
                    value={ntcFormData.ncontent}
                    onChange={handleChange}
                  />
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
    </div>
  );
}
