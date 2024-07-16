import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/notice.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getUser } from "../../util/localStorage";

export default function NoticeContent() {
  const userId = getUser();
  const user = userId ? userId.userId : null;
  const { nid } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState({});

  useEffect(() => {
    console.log(nid);
    const url = `http://localhost:8080/notice/${nid}`;
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        console.log(result.data); // 응답 데이터 구조 확인
        setNotice(result.data);
      })
      .catch((error) => console.log(error));
  }, [nid]);

  const handleNavigate = (type) => {
    navigate(`/notice/${type}/${notice.nid}`);
  };

  const handleDelete = () => {
    const url = "http://127.0.0.1:8080/notice/delete";
    axios({
      method: "delete",
      url: url,
      data: { nid: nid },
    })
      .then((result) => {
        if (result.data.cnt === 1) {
          alert("공지를 삭제하시겠습니까?");
          navigate("/notice");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="front">
      <div className="content">
        <>
          <SubTitle title={"Notice"} />
          <div className="board">
            <div className="notice-list">
              <div className="notice-list-category">
                <p>
                  <strong>{notice.ntitle}</strong>
                </p>
                <span>{notice.user_id}</span>
                <span>{notice.ndate}</span>
                <span>{notice.nhits}</span>
              </div>
              <hr className="notice-hr-stick" />
              <span className="notice-content">
                <p>{notice.ncontent} </p>
              </span>
              <hr className="notice-hr" />
              {user === "admin" && (
                <div>
                  <button
                    type="button"
                    onClick={() => handleNavigate("update")}
                  >
                    수정
                  </button>
                  <button type="button" onClick={handleDelete}>
                    삭제
                  </button>
                </div>
              )}
              <button className="notice-btn" type="button">
                <Link to={"/notice"}>목록</Link>
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
