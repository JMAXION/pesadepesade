import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/notice.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function NoticeContent() {
  const { nid } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState({});

  useEffect(() => {
    const url = `http://localhost:8080/notice/${nid}`;
    axios({
      method: "get",
      url: url,
    })
      .then((result) => setNotice(result.data))
      .catch((error) => console.log(error));
  }, [nid]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8080/notice/update";
    axios({
      method: "post",
      url: url,
      data: notice,
    })
      .then((result) => {
        if (result.data.cnt === 1) {
          navigate("/notice");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotice({ ...notice, [name]: value });
  };

  const handleNavigate = (type) => {
    type === "notice" ? navigate("/notice") : navigate(`/notice/${nid}`);
  };

  return (
    <div className="front">
      <div className="content">
        <SubTitle title="Notice (admin)" />
        <form className="qna-form">
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
                    value={notice.ntitle}
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
                    value={notice.ncontent}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="qna-form-group-btn">
            <button type="submit" onClick={handleUpdateSubmit}>
              수정
            </button>
            <button type="button" onClick={() => handleNavigate("notice")}>
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
