import {
  setIsLogin,
  setIsLogout,
  setUserInfo,
} from "../reducers/memberReducer";
import { axiosPost } from "./reduxAxios";
import { jwtDecode } from "jwt-decode";
import * as cookie from "../util/cookies.js";

export const validationCheck = ({ formData, userIdRef, userPassRef }) => {
  let checkFlag = true;

  if (!formData.userId.trim()) {
    alert("아이디를 입력해 주세요");
    userIdRef.current.focus();
    checkFlag = false;
  } else if (!formData.userPass.trim()) {
    alert("패스워드를 입력해 주세요");
    userPassRef.current.focus();
    checkFlag = false;
  }
  return checkFlag;
};

/* export function getIsLogin({ formData }) {
  const url = "http://127.0.0.1:8080/member/login";
  const data = formData;

  return async (dispatch) => {
    const loginResult = await axiosPost({ url, data });
    const cnt = loginResult.cnt;

    if (cnt === 1) {
      cookie.setCookie("x-auth-jwt", loginResult.token);
      const userInfo = jwtDecode(loginResult.token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      dispatch(setIsLogin({ cnt }));
    } else {
      alert(loginResult.message || "Login failed");
    }
  };
} */

export function getIsLogin({ formData }) {
  const url = "http://127.0.0.1:8080/member/login";
  const data = formData;

  return async (dispatch) => {
    try {
      const loginResult = await axiosPost({ url, data });

      if (!loginResult || typeof loginResult.cnt === "undefined") {
        throw new Error("Invalid response from server");
      }

      const cnt = loginResult.cnt;

      if (cnt === 1) {
        cookie.setCookie("x-auth-jwt", loginResult.token);
        const userInfo = jwtDecode(loginResult.token);

        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        dispatch(setIsLogin({ cnt }));
        dispatch(setUserInfo(userInfo)); // 추가된 사용자 정보 저장
      } else {
        alert(loginResult.message || "Login failed");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      alert("네트워크 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    }
  };
}

export function getIsLogout() {
  return (dispatch) => {
    dispatch(setIsLogout());
  };
}
