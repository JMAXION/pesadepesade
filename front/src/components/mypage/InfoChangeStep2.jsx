import React, { useState, useRef, useEffect } from "react";
import SubTitle from "../SubTitle";
import DaumPostcode from "react-daum-postcode";
import { getUser, removeUser } from "../../util/localStorage";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function InfoChangeStep2() {
  const userId = getUser().userId;

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    userPass: "",
    userPassCheck: "",
    userName: "",
    zipcode: "",
    address: "",
    detailAddress: "",
    phoneNumber1: "010",
    phoneNumber2: "",
    phoneNumber3: "",
    emailId: "",
    emailDomain: "",
    gender: "",
    birthDate: "",
    year: "",
    month: "",
    day: "",
  });

  const refs = {
    userPassRef: useRef(null),
    userPassCheckRef: useRef(null),
    userNameRef: useRef(null),
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
    detailAddressRef: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    phoneNumber3Ref: useRef(null),
    emailIdRef: useRef(null),
    emailDomainRef: useRef(null),
  };

  useEffect(() => {
    handleUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const changeEmailDomain = (e, refs, handleChange) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const name = e.target.name;
    const value = e.target.value;

    if (value === "self") {
      refs.emailDomainRef.current.value = "";
      refs.emailDomainRef.current.focus();
    } else {
      refs.emailDomainRef.current.value = value;
    }
    handleChange(e);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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

  const handleUserData = async () => {
    const url = "http://127.0.0.1:8080/mypage/userdata";

    try {
      const res = await axios.post(url, { userId });
      if (res.data) {
        const user = res.data[0] || {};

        const phone = user.phone ? user.phone.split("-") : ["010", "", ""];
        const [phoneNumber1, phoneNumber2, phoneNumber3] = phone;

        const bdate = user.bdate && user.bdate.split("년");
        const year = bdate[0] || "";
        const month = bdate[1]?.split("월")[0] || "";
        const day = bdate[1]?.split("월")[1]?.split("일")[0] || "";

        const splitAddress = (fullAddress) => {
          if (!fullAddress) return { basicAddress: "", detailAddress: "" };
          const basicAddress = fullAddress.split(" ").slice(0, -2).join(" ");
          const detailAddress = fullAddress.split(" ").slice(-2).join(" ");
          return { basicAddress, detailAddress };
        };

        const { basicAddress, detailAddress } = splitAddress(user.address);

        setFormData({
          userPass: "",
          userPassCheck: "",
          userName: user.user_name || "",
          zipcode: user.zipcode || "",
          address: basicAddress || "",
          detailAddress: detailAddress || "",
          phoneNumber1: phoneNumber1 || "010",
          phoneNumber2: phoneNumber2 || "",
          phoneNumber3: phoneNumber3 || "",
          emailId: user.email ? user.email.split("@")[0] : "",
          emailDomain: user.email ? user.email.split("@")[1] : "",
          gender: user.gender || "",
          birthDate: user.bdate_type || "",
          year: year || "",
          month: month || "",
          day: day || "",
        });
      } else {
        alert("유저 데이터를 불러올 수 없습니다.");
      }
    } catch (error) {
      alert("유저 데이터를 불러오는 중 오류가 발생했습니다.");
    }
  };

  // const handleUserData = async () => {
  //   const url = "http://127.0.0.1:8080/mypage/userdata";

  //   await axios({
  //     method: "post",
  //     url: url,
  //     data: { userId },
  //   }).then((res) => {
  //     if (res.data) {
  //       setUserData(res.data);

  //       const user = userData.length > 0 ? userData[0] : {};

  //       const phone = user.phone ? user.phone.split("-") : ["010", "", ""];
  //       const [phoneNumber1, phoneNumber2, phoneNumber3] = phone;

  //       const bdate = user.bdate
  //         ? user.bdate
  //             .split("년")
  //             .filter((part) => part !== "")
  //             .map((part) => part.trim())
  //         : ["", "", ""];
  //       const year = bdate[0] || "";
  //       const month = bdate[1]?.split("월")[0] || "";
  //       const day = bdate[1]?.split("월")[1]?.split("일")[0] || "";

  //       const splitAddress = (fullAddress) => {
  //         if (!fullAddress) return { basicAddress: "", detailAddress: "" };
  //         const basicAddress = fullAddress.split(" ").slice(0, -2).join(" ");
  //         const detailAddress = fullAddress.split(" ").slice(-2).join(" ");
  //         return { basicAddress, detailAddress };
  //       };

  //       const { basicAddress, detailAddress } = splitAddress(user.address);

  //       setFormData({
  //         /*   userId: user.user_id || "", */
  //         userPass: "",
  //         userPassCheck: "",
  //         userName: user.user_name || "",
  //         zipcode: user.zipcode || "",
  //         address: basicAddress || "",
  //         detailAddress: detailAddress || "",
  //         phoneNumber1: phoneNumber1 || "010",
  //         phoneNumber2: phoneNumber2 || "",
  //         phoneNumber3: phoneNumber3 || "",
  //         emailId: user.email ? user.email.split("@")[0] : "",
  //         emailDomain: user.email ? user.email.split("@")[1] : "",
  //         gender: user.gender || "",
  //         birthDate: user.bdate_type || "",
  //         year: year || "",
  //         month: month || "",
  //         day: day || "",
  //       });
  //     } else {
  //       setUserData([]);
  //       alert("유저 데이터를 불러올 수 없습니다.");
  //     }
  //   });
  // };

  const validateUserPass = () => {
    const passRegEx =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,16}$/;
    if (!formData.userPass || !passRegEx.test(formData.userPass)) {
      alert(
        "비밀번호는 대소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8자에서 16자 사이로 입력해 주세요."
      );
      refs.userPassRef.current.focus();
      return false;
    } else {
      return true;
    }
  };

  const handleUpdateUserData = () => {
    if (!validateUserPass()) {
      return;
    }
    if (formData.userPass !== formData.userPassCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const url = "http://127.0.0.1:8080/mypage/updateuserdata";

    axios({
      method: "post",
      url: url,
      data: {
        userId: userId,
        formData: formData,
      },
    }).then((res) => {
      if (res.data) {
        alert("회원 정보가 수정되었습니다.");
      } else {
        alert("회원정보 수정 중 오류가 발생했습니다");
      }
    });
  };

  const handleDeleteUserData = async () => {
    /*   const url = "http://127.0.0.1:8080/mypage/deleteuserdata";
    await axios({
      method: "post",
      url: url,
      data: { userId },
    }).then((res) => {
      if (res.data === 0) {
        alert("회원 탈퇴가 완료되었습니다.");
        localStorage.removeItem("accessToken"); // 예시: 로그인 토큰을 로컬 스토리지에서 삭제
        navigate("/");
      } else {
        alert("탈퇴 도중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    });
 */

    try {
      const url = "http://127.0.0.1:8080/mypage/deleteuserdata";
      const res = await axios.post(url, { userId });

      if (res.data === 1) {
        alert("회원 탈퇴가 완료되었습니다.");
        removeUser();
        navigate("/");
      } else {
        alert("탈퇴에 실패했습니다.");
      }
    } catch (error) {
      console.error("회원 탈퇴 오류:", error);
      alert("회원 탈퇴 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="content">
      <div className="editprofile">
        <SubTitle title="Edit Profile" />
        <table className="editprofile-table">
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputmain"
                name="userId"
                value={userId}
                disabled
              />
            </td>
          </tr>
          <tr>
            <td>새 비밀번호</td>
            <td>
              <input
                type="password"
                className="editprofile-table-inputmain"
                name="userPass"
                value={formData.userPass}
                onChange={handleChange}
                ref={refs.userPassRef}
              />
            </td>
          </tr>
          <tr>
            <td>새 비밀번호 확인</td>
            <td>
              <input
                type="password"
                className="editprofile-table-inputmain"
                name="userPassCheck"
                value={formData.userPassCheck}
                onChange={handleChange}
                ref={refs.userPassCheckRef}
              />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputmain"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                ref={refs.userNameRef}
              />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td className="editprofile-address-td">
              <input
                type="text"
                className="editprofile-table-inputsub"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="우편번호"
              />
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
              <input
                type="text"
                className="editprofile-table-inputmain"
                name="address"
                value={formData.address}
                ref={refs.addressRef}
                placeholder="기본주소"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputmain"
                name="detailAddress"
                value={formData.detailAddress}
                onChange={handleChange}
                ref={refs.detailAddressRef}
                placeholder="나머지 주소(선택 입력 가능)"
              />
            </td>
            {isOpen && (
              <div>
                <DaumPostcode
                  className="postmodal editprofile-postmodal "
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
              <select
                className="editprofile-table-inputsubsub"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
              >
                <option value="">010</option>
              </select>{" "}
              -{" "}
              <input
                type="text"
                className="editprofile-table-inputsubsub"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                ref={refs.phoneNumber2Ref}
                maxLength="4"
              />{" "}
              -{" "}
              <input
                type="text"
                className="editprofile-table-inputsubsub"
                name="phoneNumber3"
                value={formData.phoneNumber3}
                onChange={handleChange}
                ref={refs.phoneNumber3Ref}
                maxLength="4"
              />
            </td>
          </tr>
          <tr>
            <td>SMS 수신여부</td>
            <td>
              <input type="radio" name="receiveStatus" value="receive" />
              수신
              <input
                type="radio"
                name="receiveStatus"
                value="notReceive"
                style={{ marginLeft: "10px" }}
              />
              미수신
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputsubsub"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                ref={refs.emailIdRef}
              />
              @{" "}
              <input
                type="text"
                className="editprofile-table-inputsubsub"
                name="emailDomain"
                value={formData.emailDomain}
                onChange={handleChange}
                ref={refs.emailDomainRef}
              />{" "}
              <select
                name="emailDomain"
                onChange={(e) => changeEmailDomain(e, refs, handleChange)}
                className="editprofile-table-inputsubsubsub"
              >
                <option value="self">직접입력</option>
                <option value="naver.com">네이버</option>
                <option value="gmail.com">구글</option>
                <option value="hotmail.com">MS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>이메일 수신여부</td>
            <td>
              <input type="radio" name="receiveStatus" value="receive" />
              수신
              <input
                type="radio"
                name="receiveStatus"
                value="notReceive"
                style={{ marginLeft: "10px" }}
              />
              미수신
            </td>
          </tr>
          <tr>
            <td>성별</td>
            <td>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              남자
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                style={{ marginLeft: "10px" }}
              />
              여자
            </td>
          </tr>
          <tr>
            <td>생일</td>
            <td>
              <input
                type="radio"
                name="birthDate"
                value="solar"
                checked={formData.birthDate === "solar"}
                onChange={handleChange}
              />
              양력
              <input
                type="radio"
                name="birthDate"
                value="lunar"
                checked={formData.birthDate === "lunar"}
                onChange={handleChange}
                style={{ marginLeft: "10px" }}
              />
              음력
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="editprofile-table-inputsubsubsubsub"
                name="year"
                value={formData.year}
                onChange={handleChange}
                maxLength="4"
              />
              년
              <input
                type="text"
                className="editprofile-table-inputsubsubsubsub"
                name="month"
                value={formData.month}
                onChange={handleChange}
                maxLength="2"
              />
              월
              <input
                type="text"
                className="editprofile-table-inputsubsubsubsub"
                name="day"
                value={formData.day}
                onChange={handleChange}
                maxLength="2"
              />
              일
            </td>
          </tr>
        </table>

        <p className="profileedit-buttons">
          <button className="profileedit-button" onClick={handleUpdateUserData}>
            Edit Account
          </button>
          <button className="profileedit-button" onClick={handleDeleteUserData}>
            Delete Account
          </button>
          <Link to={"/mypage"}>
            <button className="profileedit-button">Cancel</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
