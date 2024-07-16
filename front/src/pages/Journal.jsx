import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/journal.css";
import { Link } from "react-router-dom";
import SubTitle from "../components/SubTitle";

export default function Journal() {
  const [journalList, setJournalList] = useState([]);
  const [filteredJournalList, setFilteredJournalList] = useState([]);
  const [iframeClass, setIframeClass] = useState("journal-iframe");
  const [filter, setFilter] = useState("ALL");
  const url = "http://localhost:8080/journal";

  useEffect(() => {
    axios({
      method: "post",
      url: url,
    })
      .then((res) => {
        setJournalList(res.data);
        setFilteredJournalList(res.data); // 초기에는 전체 리스트를 설정
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

  useEffect(() => {
    if (filter === "ALL") {
      setFilteredJournalList(journalList);
    } else {
      setFilteredJournalList(
        journalList.filter((journal) => journal.jcategory === filter)
      );
    }
  }, [filter, journalList]);

  const handleOptionChange = (event) => {
    setFilter(event.target.value);
  };

  const rows = [];
  for (let i = 0; i < filteredJournalList.length; i += 3) {
    rows.push(filteredJournalList.slice(i, i + 3));
  }

  return (
    <div>
      <div className={iframeClass}>
        <video muted autoPlay loop className="journal-iframe-video">
          <source src="/video/pesade_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="journal">
        <SubTitle title="Journal" />
        <div>
          <select
            name=""
            id="mySelect"
            onChange={handleOptionChange}
            value={filter}
            className="journal-selectbox"
          >
            <option value="ALL">ALL</option>
            <option value="BRAND">BRAND</option>
            <option value="MOOD">MOOD</option>
          </select>
        </div>
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
