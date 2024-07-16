import React, { useState, useRef } from "react";
import SubTitle from "../SubTitle";
import DaumPostcode from "react-daum-postcode";

export default function InfoChangeStep2() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    service: false,
    personal: false,
    userId: "",
    userPass: "",
    userPassCheck: "",
    userName: "",
    emailId: "",
    emailDomain: "",
    phoneNumber1: "010",
    phoneNumber2: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  });
  const refs = {
    userIdRef: useRef(null),
    userPassRef: useRef(null),
    userPassCheckRef: useRef(null),
    userNameRef: useRef(null),
    emailIdRef: useRef(null),
    emailDomainRef: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
    detailAddressRef: useRef(null),
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  //---- DaumPostcode 관련 디자인 및 이벤트 시작 ----//
  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };

  const postCodeStyle = {
    width: "360px",
    height: "480px",
  };

  const completeHandler = (data) => {
    const { address, zonecode } = data;
    handleAddress({ zipcode: zonecode, address: address });
  };
  const handleAddress = (e) => {
    setFormData({ ...formData, zipcode: e.zipcode, address: e.address });
  };

  const closeHandler = (state) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
      refs.detailAddressRef.current.value = "";
      refs.detailAddressRef.current.focus();
    }
  };
  //---- DaumPostcode 관련 디자인 및 이벤트 종료 ----//
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
            <button
              className="editprofile-table-inputbutton"
              onClick={handleToggle}
            >
              주소검색
            </button>
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
          {isOpen && (
            <div>
              <DaumPostcode
                className="postmodal"
                theme={themeObj}
                style={postCodeStyle}
                onComplete={completeHandler}
                onClose={closeHandler}
              />
            </div>
          )}
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
