import React from "react";
import SubTitle from "../components/SubTitle";
import "../css/notice.css";
import pin from "../svg/thumbtack-solid.svg";
import { Link } from "react-router-dom";

export default function Notice() {
  return (
    <>
      <div className="front">
        <div className="content">
          <SubTitle title="Notice" />
          <ul className="notice-list">
            <li className="notice-list-category">
              <hr className="notice-hr-stick" />
              <Link to="/notice/1">
                <p>
                  <img src={pin} alt="pin" />
                  <strong>페사드 한남 플래그십 임시 휴무 안내</strong>
                </p>
                <span>pesade</span>
                <span>2024-06-30</span>
                <span>조회 53</span>
              </Link>
              <hr className="notice-hr-stick" />
            </li>
            <li className="notice-list-category">
              <p>
                <strong>페사드 한남 플래그십 임시 휴무 안내</strong>
              </p>
              <span>pesade</span>
              <span>2024-06-30</span>
              <span>조회 53</span>
              <hr className="notice-hr" />
            </li>
            <li className="notice-list-category">
              <p>
                <strong>페사드 한남 플래그십 임시 휴무 안내</strong>
              </p>
              <span>pesade</span>
              <span>2024-06-30</span>
              <span>조회 53</span>
              <hr className="notice-hr" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
