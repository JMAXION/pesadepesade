import React from "react";
import SubTitle from "../../components/SubTitle";

export default function MyPageOrder() {
  return (
    <div>
      <SubTitle title="My Order" />
      <div>
        <ul>
          <ul>주문내역 조회 (0건)</ul>
          <ul>취소/교환/반품 내역 (0건)</ul>
        </ul>
      </div>
    </div>
  );
}
