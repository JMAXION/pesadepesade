import React from "react";
import SubTitle from "../components/SubTitle";
import "../css/mypage.css";

export default function MyPage() {
  return (
    <div>
      <SubTitle title="mypage" />
      <div className="mypage">
        <div className="mypage-leftmenu">
          <p>마이페이지</p>
          <ul>
            <li>쇼핑정보</li>
            <li>주문내역 조회</li>
            <li>취소/교환/반품 내역</li>
          </ul>
          <ul>
            <li>혜택관리</li>
            <li>쿠폰</li>
            <li>적립금</li>
          </ul>
          <ul>
            <li>회원정보</li>
            <li>회원정보 수정</li>
          </ul>
          <ul>
            <li>나의 게시글</li>
            <li>1:1문의</li>
            <li>상품문의</li>
            <li>상품후기</li>
          </ul>
        </div>
        <div className="mypage-rightmenu">
          <ul className="mypage-info">
            <li className="mypage-info-name">
              <p>
                <span className="mypage-info-name-highlight">홍길동</span> 님은{" "}
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
                <p>회원정보 수정</p>
              </li>
              <li className="mypage-info-detail-acoupon">
                <p>사용 가능 적립금</p>
                <p>보유중인 쿠폰</p>
                <p>찜리스트</p>
              </li>
            </li>
          </ul>
          <div className="mypage-division-line"></div>
          <ul className="mypage-detail-info">
            <li>
              <p>나의 주문현황</p>
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
                  <p>
                    <p>답변대기</p>
                    <p>답변완료</p>
                  </p>
                  <p>
                    <p>0</p>
                    <p>0</p>
                  </p>
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
