import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/journal.css";
import { Link } from "react-router-dom";

export default function Journal() {
  const [journalList, setJournalList] = useState([]);
  const [iframeClass, setIframeClass] = useState("journal-iframe");
  const url = "http://localhost:8080/journal";

  useEffect(() => {
    axios({
      method: "post",
      url: url,
    })
      .then((res) => {
        setJournalList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setIframeClass("journal-iframe");
      } else {
        setIframeClass("journal-iframe scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rows = [];
  for (let i = 0; i < journalList.length; i += 3) {
    rows.push(journalList.slice(i, i + 3));
  }

  const updateContent = () => {};

  return (
    <div>
      <div className={iframeClass}>
        <video muted autoPlay loop className="journal-iframe-video">
          <source src="/video/pesade_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <select name="" id="mySelect" onChange={updateContent()}>
          <option value="ALL">ALL</option>
          <option value="BRAND">BRAND</option>
          <option value="MOOD">MOOD</option>
        </select>
      </div>
      <div className="journal">
        {rows.map((row, rowIndex) => (
          <ul key={rowIndex} className="journal-contents">
            {row.map((journal, index) => {
              const actualIndex = rowIndex * 3 + index;
              return journal.id ? (
                <Link
                  to={`/journal/${journal.id}`}
                  key={actualIndex}
                  className="journal-link"
                >
                  <li>
                    <div className="journal-content">
                      <img
                        src={journal.jimg}
                        alt=""
                        className="journal-content-image"
                      />
                      <p>{journal.jcategory}</p>
                      <p className="journal-content-title">{journal.jtitle}</p>
                      <p className="journal-content-desc">{journal.jdesc}</p>
                    </div>
                  </li>
                </Link>
              ) : (
                <p key={`empty-${actualIndex}`}></p>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}
