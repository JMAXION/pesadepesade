import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/journal.css";

export default function Journal() {
  const [journalList, setJournalList] = useState([]);
  useEffect(() => {
    axios
      .get("/data/journal.jaon")
      .then((res) => {
        setJournalList(res.data || []);
      })
      .catch((error) => console.log(error));
  }, []);
  const rows = [];
  for (let i = 0; i < journalList.length; i += 3) {
    rows.push(journalList.slice(i, i + 3));
  }
  return (
    <div className="journal">
      <img
        src="https://perfumegraphy.com/web/_pg/banner/Banner_curation_PC.webp"
        alt=""
        className="journal-image"
      />
      {rows.map((row, rowIndex) => (
        <ul key={rowIndex}>
          {row.map((journal, index) => {
            const actualIndex = rowIndex * 3 + index;
            return journal.id ? (
              <li key={actualIndex}>
                <div>
                  <img src={journal.img} alt="" />
                  <p>{journal.title}</p>
                  <p>{journal.desc}</p>
                </div>
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
