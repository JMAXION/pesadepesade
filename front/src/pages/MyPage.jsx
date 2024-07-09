import React from "react";
import SubTitle from "../components/SubTitle";
import "../css/mypage.css";

export default function MyPage() {
  return (
    <div>
      <SubTitle title="mypage" />
      <table border="1" className="mypage-table">
        <thead>
          <tr>
            <th>입금전</th>
            <th>배송준비중</th>
            <th>배송중</th>
            <th>배송완료</th>
            <th>취소</th>
            <th>교환</th>
            <th>반품</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <li>
        <p>Order & Shipping</p> <p>회원정보 수정</p> <p>Address</p> <p>Point</p>
        <p>Coupon</p>
      </li>
      Board
    </div>
  );
}
