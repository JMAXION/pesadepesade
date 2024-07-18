import React, { useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/mypage.css";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../util/localStorage";

export default function MyPage() {
  const userId = getUser().userId;
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState({
    shoppingInfo: false,
    benefits: false,
    memberInfo: false,
    myPosts: false,
  });
  const handleToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="my-page">
      <SubTitle title="mypage" />
      <ul className="mypage-info">
        <li className="mypage-info-name">
          <p>
            <span className="mypage-info-name-highlight">{userId}</span> 님은{" "}
            <span className="mypage-info-name-highlight">기본 등급</span>
            입니다.
          </p>
          <p className="mypage-info-buy">
            <p>구매금액 0원</p>
            <p>구매횟수 0건</p>
          </p>
        </li>
        <li className="mypage-info-detail">
          <li className="mypage-info-detail-grade">
            <p>등급혜택 안내</p>
            <p
              onClick={() => navigate("/mypage/userinfo")}
              className="mypage-info-to-userinfo"
            >
              회원정보 수정
            </p>
          </li>
          <li className="mypage-info-detail-acoupon">
            {/* <p>사용 가능 적립금</p> */}
            <p
              onClick={() => navigate("/mypage/coupon")}
              className="mypage-info-to-userinfo"
            >
              보유중인 쿠폰
            </p>
          </li>
        </li>
      </ul>
      <div className="mypage">
        <div className="mypage-leftmenu">
          <p className="mypage-toggle-title">마이페이지</p>
          <ul>
            <li
              onClick={() => handleToggle("shoppingInfo")}
              className="mypage-toggle"
            >
              쇼핑정보
            </li>
            {openSections.shoppingInfo && (
              <>
                <li
                  className="mypage-toggle-detail"
                  onClick={() => navigate("/mypage/order")}
                >
                  주문내역 조회
                </li>
                {/*                 <li
                  className="mypage-toggle-detail"
                  onClick={() =>
                    navigate("/mypage/order", { state: { buttonNumber: "2" } })
                  }
                >
                  취소/교환/반품 내역
                </li> */}
              </>
            )}
          </ul>
          <ul>
            <li
              onClick={() => handleToggle("benefits")}
              className="mypage-toggle"
            >
              혜택관리
            </li>
            {openSections.benefits && (
              <>
                <li
                  className="mypage-toggle-detail"
                  onClick={() => navigate("/mypage/coupon")}
                >
                  쿠폰
                </li>
                {/* <li className="mypage-toggle-detail">적립금</li> */}
              </>
            )}
          </ul>
          <ul>
            <li
              onClick={() => handleToggle("memberInfo")}
              className="mypage-toggle"
            >
              회원정보
            </li>
            {openSections.memberInfo && (
              <>
                <li
                  className="mypage-toggle-detail"
                  onClick={() => navigate("/mypage/userinfo")}
                >
                  회원정보 수정
                </li>
              </>
            )}
          </ul>
          <ul>
            <li
              onClick={() => handleToggle("myPosts")}
              className="mypage-toggle"
            >
              나의 게시글
            </li>
            {openSections.myPosts && (
              <>
                <Link to={"/mypage/myboard"}>
                  <li className="mypage-toggle-detail">1:1문의</li>
                </Link>
                <li className="mypage-toggle-detail">상품문의</li>
                <li className="mypage-toggle-detail">상품후기</li>
              </>
            )}
          </ul>
        </div>
        <div className="mypage-rightmenu">
          <div className="mypage-division-line"></div>
          <ul className="mypage-detail-info">
            <li>
              <p className="mypage-detail-myorder">
                <p>나의 주문현황</p>
                <p
                  onClick={() =>
                    navigate("/mypage/order", { state: { buttonNumber: "1" } })
                  }
                  className="mypage-detail-check"
                >
                  전체보기
                </p>
              </p>
              <table className="mypage-table">
                <tr>
                  <td>미입금</td>
                  <td>주문 접수</td>
                  <td>배송중</td>
                  <td>배송완료</td>
                  <td>취소/교환/반품 내역</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </table>
            </li>
          </ul>
          <ul>
            <p>나의 게시글</p>
            <ul className="mypage-myscript">
              <li className="mypage-myscript-detail">
                <p className="mypage-myscript-detail-title">1:1문의</p>
                <p className="mypage-myscript-detail-answer">
                  <Link to={"/mypage/myboard"}>
                    <p>문의내역</p>
                  </Link>
                </p>
              </li>
              <li className="mypage-myscript-detail">
                <p className="mypage-myscript-detail-title">상품후기</p>
                <p className="mypage-myscript-detail-answer">
                  <p>
                    <p>작성가능 후기</p>
                    <p>작성완료 후기</p>
                  </p>
                  <p>
                    <p>0</p>
                    <p>0</p>
                  </p>
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
