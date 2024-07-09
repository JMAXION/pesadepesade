import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/notice.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function NoticeContent() {
  const userId = "admin";
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
                <span>{userId}</span>
                <span>{notice.ndate}</span>
                <span>{notice.nhits}</span>
              </div>
              <hr className="notice-hr-stick" />
              <span className="notice-content">
                <p>{notice.ncontent} </p>
              </span>
              <hr className="notice-hr" />
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
