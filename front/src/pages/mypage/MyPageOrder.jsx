import React, { useState } from "react";
import "../../css/mypage.css";
import SubTitle from "../../components/SubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function MyPageOrder() {
  const [activeButton, setActiveButton] = useState(1);
  const [activeDate, setActiveDate] = useState(3);

  const clickChange = (index) => {
    setActiveButton(index);
  };
  const dateChange = (index) => {
    setActiveDate(index);
  };

  return (
    <div>
      <SubTitle title="Order & Shipping" />
      <div className="myorder">
        <ul className="myorder-title">
          <button
            className={`myorderbutton ${activeButton === 1 ? "active" : ""}`}
            onClick={() => clickChange(1)}
          >
            주문내역 조회 (0건)
          </button>
          <button
            className={`myorderbutton ${activeButton === 2 ? "active" : ""}`}
            onClick={() => clickChange(2)}
          >
            취소/교환/반품 내역 (0건)
          </button>
        </ul>
        {activeButton === 1 && (
          <div className="myorderselect-content">
            <ul className="myorder-select">
              <p>상태</p>
              <select name="" id="">
                <option value="">전체 주문처리과정</option>
                <option value="">입금전</option>
                <option value="">배송준비중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
                <option value="">취소</option>
                <option value="">교환</option>
                <option value="">반품</option>
              </select>
            </ul>
            <ul className="myorder-select">
              <p>기간</p>
              <button
                className={`myorderdate ${activeDate === 1 ? "active" : ""}`}
                onClick={() => dateChange(1)}
              >
                오늘
              </button>
              <button
                className={`myorderdate ${activeDate === 2 ? "active" : ""}`}
                onClick={() => dateChange(2)}
              >
                1개월
              </button>
              <button
                className={`myorderdate ${activeDate === 3 ? "active" : ""}`}
                onClick={() => dateChange(3)}
              >
                3개월
              </button>
              <button
                className={`myorderdate ${activeDate === 4 ? "active" : ""}`}
                onClick={() => dateChange(4)}
              >
                6개월
              </button>
              <button
                className={`myorderdate ${activeDate === 5 ? "active" : ""}`}
                onClick={() => dateChange(5)}
              >
                기간설정
              </button>
            </ul>
            <p>
              <FontAwesomeIcon icon={faTriangleExclamation} />
              취소/교환/반품 신청은 주문 완료일 기준 7일까지 가능합니다.
            </p>
          </div>
        )}
        {activeButton === 2 && (
          <div className="myorderselect-content">
            <ul className="myorder-select">
              <p>기간</p>
              <button
                className={`myorderdate ${activeDate === 1 ? "active" : ""}`}
                onClick={() => dateChange(1)}
              >
                오늘
              </button>
              <button
                className={`myorderdate ${activeDate === 2 ? "active" : ""}`}
                onClick={() => dateChange(2)}
              >
                1개월
              </button>
              <button
                className={`myorderdate ${activeDate === 3 ? "active" : ""}`}
                onClick={() => dateChange(3)}
              >
                3개월
              </button>
              <button
                className={`myorderdate ${activeDate === 4 ? "active" : ""}`}
                onClick={() => dateChange(4)}
              >
                6개월
              </button>
              <button
                className={`myorderdate ${activeDate === 5 ? "active" : ""}`}
                onClick={() => dateChange(5)}
              >
                기간설정
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
