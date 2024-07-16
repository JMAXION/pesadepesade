import { getCookie, removeCookie } from "./cookies.js";

export const getUser = () => {
  let userInfo =
    localStorage.getItem("userInfo") && getCookie("x-auth-jwt")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

  return userInfo;
};

export const removeUser = () => {
  removeCookie("x-auth-jwt");
  localStorage.clear();
};
