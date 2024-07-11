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
            <input type="text" className="editprofile-table-inputsubsub" />년
            <input type="text" className="editprofile-table-inputsubsub" />월
            <input type="text" className="editprofile-table-inputsubsub" />일
          </td>
        </tr>
      </table>
      {/* <p className="profileedit">
        <p className="profileedit-id">
          <p>아이디</p>
          <input type="text" />
        </p>
        <p className="profileedit-pass">
          <p>현재 비밀번호</p>
          <input type="password" />
        </p>
        <p className="profileedit-newpass">
          <p>새 비밀번호</p>
          <input type="password" />
        </p>
        <p className="profileedit-newpasscheck">
          <p>새 비밀번호 확인</p>
          <input type="password" />
        </p>
        <p className="profileedit-name">
          <p>이름</p>
          <input type="text" />
        </p>
        <p className="profileedit-address">
          <p>주소</p>
          <p>
            <div>
              <input type="text" name="zipcode" placeholder="우편번호" />
              <button type="button">주소검색</button>
            </div>
            <p>
              <input type="text" />
            </p>
            <p>
              <input type="text" />
            </p>
          </p>
        </p>
        <p className="profileedit-phone">
          <p>휴대전화</p>
          <select name="" id="">
            <option value="">010</option>
          </select>
          <input type="text" />
          <input type="text" />
        </p>
        <p className="profileedit-sms">
          <p>SMS 수신여부</p>
          <p>
            <input type="radio" /> 수신함
          </p>
          <p>
            <input type="radio" /> 수신안함
          </p>
        </p>
        <p className="profileedit-email">
          <p>이메일</p>
          <input type="text" />
          <p>@</p>
          <select name="" id="">
            <option value="">직접입력</option>
            <option value="">네이버</option>
            <option value="">구글</option>
            <option value="">MS</option>
          </select>
        </p>
        <p className="profileedit-emailmessage">
          <p>이메일 수신여부</p>
          <p>
            <input type="radio" /> 수신함
          </p>
          <p>
            <input type="radio" /> 수신안함
          </p>
        </p>
        <p className="profileedit-gender">
          <p>성별</p>
          <p>
            <input type="radio" /> 남자
          </p>
          <p>
            <input type="radio" /> 여자
          </p>
        </p>
        <p className="profileedit-birth">
          <p>생년월일</p>
          <p>
            <input type="radio" /> 양력
            <input type="radio" /> 음력
            <p>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </p>
          </p>
        </p>
      </p> */}
      <p className="profileedit-buttons">
        <button className="profileedit-button">Edit Account</button>
        <button className="profileedit-button">Delete Account</button>
        <button className="profileedit-button">Cancel</button>
      </p>
    </div>
  );
}
