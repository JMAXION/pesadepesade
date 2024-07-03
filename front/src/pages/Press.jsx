import React, { useEffect, useState } from "react";
import axios from "axios";
import SubTitle from "../components/SubTitle";
import "../css/press.css";
import { Link } from "react-router-dom";

export default function Press() {
  const [pressList, setPressList] = useState([]);
  useEffect(() => {
    axios
      .get("/data/press.json")
      .then((res) => {
        setPressList(res.data || []);
      })
      .catch((error) => console.log(error));
  }, []);
  const rows = [];
  for (let i = 0; i < pressList.length; i += 2) {
    rows.push(pressList.slice(i, i + 2));
  }
  return (
    <div className="press">
      <SubTitle title="Press" />
      {rows.map((row, rowIndex) => (
        <ul key={rowIndex} className="press-items">
          {row.map((press, index) => {
            const actualIndex = rowIndex * 2 + index;
            return press.id ? (
              <li>
                <Link to={press.link} className="press-link">
                  <div className="press-item">
                    <img src={press.img} alt="" className="press-img" />
                    <p className="press-title">{press.title}</p>
                    <p className="press-desc">{press.desc}</p>
                    <p className="press-season">{press.season}</p>
                  </div>
                </Link>
              </li>
            ) : (
              <p key={`empty-${actualIndex}`}></p>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
