import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/journal.css";

export default function Journal() {
  const [journalList, setJournalList] = useState([]);
  const [iframeClass, setIframeClass] = useState("journal-iframe");

  useEffect(() => {
    axios
      .get("/data/journal.json")
      .then((res) => {
        setJournalList(res.data || []);
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

  return (
    <div>
      <div className={iframeClass}>
        <video muted autoPlay loop className="journal-iframe-video">
          <source src="/video/pesade_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="journal">
        {rows.map((row, rowIndex) => (
          <ul key={rowIndex} className="journal-contents">
            {row.map((journal, index) => {
              const actualIndex = rowIndex * 3 + index;
              return journal.id ? (
                <li key={actualIndex}>
                  <div className="journal-content">
                    <img
                      src={journal.img}
                      alt=""
                      className="journal-content-image"
                    />
                    <p className="journal-content-title">{journal.title}</p>
                    <p className="journal-content-desc">{journal.desc}</p>
                  </div>
                </li>
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
