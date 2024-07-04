import React, { useEffect, useState } from "react";
import axios from "axios";
import SubTitle from "../components/SubTitle";
import "../css/press.css";
import { Link } from "react-router-dom";

export default function Press() {
  const [pressList, setPressList] = useState([]);
  const url = "http://localhost:8080/press";

  useEffect(() => {
    axios({
      method: "post",
      url: url,
    })
      .then((res) => {
        console.log(res.data);
        setPressList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const rows = [];
  for (let i = 0; i < pressList.length; i += 2) {
    rows.push(pressList.slice(i, i + 2));
  }

  console.log(pressList);

  return (
    <div className="press">
      <SubTitle title="Press" />
      {rows.map((row, rowIndex) => (
        <ul key={rowIndex} className="press-items">
          {row.map((press, index) => {
            const actualIndex = rowIndex * 2 + index;
            console.log(press.plink);
            return press.pid ? (
              <li key={actualIndex}>
                <Link to={press.plink} className="press-link">
                  <div className="press-item">
                    <img src={press.pimg} alt="" className="press-img" />
                    <p className="press-title">{press.ptitle}</p>
                    <p className="press-desc">{press.pdesc}</p>
                    <p className="press-season">{press.pseason}</p>
                  </div>
                </Link>
              </li>
            ) : (
              <li key={`empty-${actualIndex}`}></li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
