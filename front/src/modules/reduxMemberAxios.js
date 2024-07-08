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
      localStorage.setItem("userInfo", JSOn.stringify(userInfo));

      dispatch(setIsLogin({ cnt }));
    }
  };
}
 */
