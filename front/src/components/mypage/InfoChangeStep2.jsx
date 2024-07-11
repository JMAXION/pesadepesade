import React from "react";
import SubTitle from "../SubTitle";

export default function InfoChangeStep2({ nextstep }) {
  return (
    <div>
      <SubTitle title="Edit Profile" />
      <table className="editprofile-table">
        <tr>
          <td>아이디</td>
          <td>
            <input type="text" className="editprofile-table-inputmain" />
          </td>
        </tr>
        <tr>
          <td>현재 비밀번호</td>
          <td>
            <input type="password" className="editprofile-table-inputmain" />
          </td>
        </tr>
        <tr>
          <td>새 비밀번호</td>
          <td>
            <input type="password" className="editprofile-table-inputmain" />
          </td>
        </tr>
        <tr>
          <td>새 비밀번호 확인</td>
          <td>
            <input type="password" className="editprofile-table-inputmain" />
          </td>
        </tr>
        <tr>
          <td>이름</td>
          <td>
            <input type="text" className="editprofile-table-inputmain" />
          </td>
        </tr>
        <tr>
          <td>주소</td>
          <td>
            <input
              type="text"
              placeholder="우편번호"
              className="editprofile-table-inputsub"
            />{" "}
            <button className="editprofile-table-inputbutton">주소검색</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="text" className="editprofile-table-inputmain" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="text" className="editprofile-table-inputmain" />
          </td>
        </tr>
        <tr>
          <td>휴대전화</td>
          <td>
            <select name="" id="" className="editprofile-table-inputsubsub">
              <option value="">010</option>
            </select>{" "}
            - <input type="text" className="editprofile-table-inputsubsub" /> -{" "}
            <input type="text" className="editprofile-table-inputsubsub" />
          </td>
        </tr>
        <tr>
          <td>SMS 수신여부</td>
          <td>
            <input type="radio" />
            수신
            <input type="radio" />
            미수신
          </td>
        </tr>
        <tr>
          <td>이메일</td>
          <td>
            <input type="text" className="editprofile-table-inputsubsub" />@{" "}
            <input type="text" className="editprofile-table-inputsubsub" />{" "}
            <select name="" id="" className="editprofile-table-inputsubsubsub">
              <option value="">직접입력</option>
              <option value="">네이버</option>
              <option value="">구글</option>
              <option value="">MS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>이메일 수신여부</td>
          <td>
            <input type="radio" />
            수신
            <input type="radio" />
            미수신
          </td>
        </tr>
        <tr>
          <td>성별</td>
          <td>
            <input type="radio" />
            남자
            <input type="radio" />
            여자
          </td>
        </tr>
        <tr>
          <td>생일</td>
          <td>
            <input type="radio" />
            양력
            <input type="radio" />
            음력
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              className="editprofile-table-inputsubsubsubsub"
            />
            년
            <input
              type="text"
              className="editprofile-table-inputsubsubsubsub"
            />
            월
            <input
              type="text"
              className="editprofile-table-inputsubsubsubsub"
            />
            일
          </td>
        </tr>
      </table>

      <p className="profileedit-buttons">
        <button className="profileedit-button">Edit Account</button>
        <button className="profileedit-button">Delete Account</button>
        <button className="profileedit-button">Cancel</button>
      </p>
    </div>
  );
}
