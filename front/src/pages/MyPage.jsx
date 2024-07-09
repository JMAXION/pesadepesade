import React from "react";
import SubTitle from "../components/SubTitle";

export default function MyPage() {
  return (
    <div>
      <SubTitle title="mypage" />
      <table>
        <thead>
          <tr>
            <th>입금전</th>
            <th>배송준비중</th>
            <th>배송중</th>
            <th>배송완료</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
