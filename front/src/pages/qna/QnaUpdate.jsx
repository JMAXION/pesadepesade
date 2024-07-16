import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function QnaUpdate() {
  const navigate = useNavigate();
  const { qid, rno } = useParams();
  const [qna, setQna] = useState({});
  const [isSecret, setIsSecret] = useState(false); // 비밀글 여부 상태

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

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8080/qna/update";
    axios({
      method: "post",
      url: url,
      data: qna,
    })
      .then((result) => {
        if (result.data.cnt === 1) {
          navigate("/qna");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQna({ ...qna, [name]: value });
    // console.log(boardFormData);
  };

  const handleNavigate = (type) => {
    type === "qna" ? navigate("/qna") : navigate(`/qna/${qid}/${rno}`);
  };

  return (
    <div className="front">
      <div className="content">
        <SubTitle title={"문의내용 수정"} />
        <form className="qna-form">
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
                    value={qna.qtitle}
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
                    value={qna.qcontent}
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
            <button type="button" onClick={() => handleNavigate("qna")}>
              취소
            </button>
          </div>
        </form>

        {/* <div className="board">
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
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
