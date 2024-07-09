import React from "react";
import SubTitle from "../components/SubTitle";
import "../css/mypage.css";

export default function MyPage() {
  return (
    <div>
      <SubTitle title="mypage" />
      <div>
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
      <div></div>
    </div>
  );
}
