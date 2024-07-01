import React from "react";
import SubTitle from "../components/SubTitle";
import "../css/notice.css";
import { Link } from "react-router-dom";
export default function NoticeContent() {
  return (
    <div className="content">
      <>
        <SubTitle title={"Notice"} />
        <div className="notice-list">
          <div className="notice-list-category">
            <p>
              <strong>페사드 한남 플래그십 임시 휴무 안내</strong>
            </p>
            <span>pesade</span>
            <span>2024-06-30</span>
            <span>조회 53</span>
          </div>
          <hr className="notice-hr-stick" />
          <span className="notice-content">
            <p>안녕하세요.</p>
            <br />
            <p>페사드 플래그쉽 스토어 한남점의 리뉴얼 공사로</p>
            <p>임시 휴무 일정을 안내 드립니다.</p>
            <br />
            <p>기간 : 10.18(수) – 10.19(목) 2일간 </p>
            <p>장소 : 페사드 플래그쉽 한남점 </p>
            <br />
            <p>새로운 모습으로 10.20(금)부터 정상 운영 예정이오니,</p>
            <p>양해와 관심 부탁드립니다.</p>
            <br />
            <p>감사합니다.</p>
            <br />
            <p>페사드</p>
            <br />
            <br />
            <p>Temporary Closed of pesade Hannam Flagship </p>
            <p>We’re informing you of the temporary closure schedule</p>
            <p>as pesade Hannam Flagship Store is being renewed.</p>
            <br />
            <p>Period: 10.18 (Wed.) – 10.19 (Thur.) for 2 days </p>
            <p>Location: pesade Hannam Flagship Store </p>
            <br />
            <p>
              We are going to operate normally from 10.20 (Fri.) as a new place.
            </p>
            <p>We’d like to ask your understanding and attention.</p>
            <br />
            <p>Thank you !</p>
            <br />
            <p>From pesade</p>
          </span>
          <hr className="notice-hr-stick" />
          <button className="notice-btn" type="button">
            <Link to={"/notice"}>목록</Link>
          </button>
        </div>
      </>
    </div>
  );
}
