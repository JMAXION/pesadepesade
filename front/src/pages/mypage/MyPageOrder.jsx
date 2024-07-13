import React, { useState } from "react";
import "../../css/mypage.css";
import SubTitle from "../../components/SubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function MyPageOrder() {
  const location = useLocation();
  const buttonNumber = location.state.buttonNumber || 1;
  const [activeButton, setActiveButton] = useState(buttonNumber);
  const [activeDate, setActiveDate] = useState(3);
  console.log("button-->", buttonNumber);
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
              <select name="" id="" className="myorder-selectbox">
                <option value="" style={{ backgroundColor: "transparent" }}>
                  전체 주문처리과정
                </option>
                <option value="undeposit">입금전</option>
                <option value="ready">배송준비중</option>
                <option value="shipping">배송중</option>
                <option value="shipped">배송완료</option>
                <option value="delete">취소</option>
                <option value="exchange">교환</option>
                <option value="cancel">반품</option>
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
            <p className="myorderselect-warning-text">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              취소/교환/반품 신청은 주문 완료일 기준 7일까지 가능합니다.
            </p>
            <p className="myorder-orderlist">주문 내역이 없습니다.</p>
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
            <p className="myorder-orderlist">주문 내역이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
