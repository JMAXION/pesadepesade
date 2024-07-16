import React, { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/notice.css";
import pin from "../../svg/thumbtack-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Notice() {
  const navigate = useNavigate();
  const [ntcList, setNtcList] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/notice/list";
    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        const list = result.data;
        console.log("Fetched list:", list); // 응답 데이터 구조 확인
        setNtcList(list);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdateNHits = (nid) => {
    const url = "http://localhost:8080/notice/updateNhits";
    try {
      axios({
        method: "post",
        url: url,
        data: { nid: nid },
      }).then((result) => {
        if (result.data.cnt === 1) navigate(`/notice/${nid}`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="front">
        <div className="content">
          <SubTitle title="Notice" />
          <div className="board">
            <ul className="notice-list">
              {ntcList.map((notice) => (
                <li
                  onClick={() => handleUpdateNHits(notice.nid)}
                  key={notice.id}
                  className="notice-list-category"
                >
                  {/* <hr className="notice-hr-stick" /> */}
                  <Link to={`/notice/${notice.nid}`}>
                    <p>
                      <img src={pin} alt="pin" />
                      <strong>{notice.ntitle}</strong>
                    </p>
                    <span>{notice.user_id}</span>
                    <span>{notice.ndate}</span>
                    <span>{notice.nhits}</span>
                  </Link>
                  <hr className="notice-hr" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
