import React, { useRef, useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/board.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUser } from "../../util/localStorage";

export default function ReviewWrite() {
  const navigate = useNavigate();
  const userId = getUser().userId;

  const [reviewFormData, setReviewFormData] = useState({
    rtitle: "",
    rcontent: "",
    user_id: userId,
  });

  const refs = {
    rtitleRef: useRef(null),
    rcontentRef: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(reviewFormData);

  /* 등록 */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(refs)) {
      const url = "http://127.0.0.1:8080/qna/new";
      axios({
        method: "post",
        url: url,
        data: reviewFormData,
      })
        .then((res) => {
          console.log(res.data.cnt);

          if (res.data.cnt === 1) {
            navigate("/shop");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const validate = (refs) => {
    let checkFlag = true;

    if (refs.rtitleRef.current.value === "") {
      alert("제목을 입력해주세요");
      refs.rtitleRef.current.focus();
      checkFlag = false;
    } else if (refs.rcontentRef.current.value === "") {
      alert("내용을 입력해주세요");
      refs.qcontentRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  };

  return (
    <div className="content">
      <SubTitle title="리뷰 작성" />
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
                  name="rtitle"
                  value={reviewFormData.rtitle}
                  onChange={handleChange}
                  ref={refs.rtitleRef}
                />
              </td>
            </tr>
            <tr className="qna-form-group">
              <td>
                <label htmlFor="qcontent">내용</label>
              </td>
              <td>
                <textarea
                  name="rcontent"
                  value={reviewFormData.rcontent}
                  onChange={handleChange}
                  ref={refs.rcontentRef}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="qna-form-group-btn">
          <button type="submit">등록</button>
          <button type="button">취소</button>
        </div>
      </form>
    </div>
  );
}
