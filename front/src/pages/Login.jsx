import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { getIsLogin, validationCheck } from "../modules/reduxMemberAxios";

// import { setIsLogin /* , setIsLogout  */ } from "../reducers/memberReducer";
// import { axiosPost } from "../modules/reduxAxios.js";
// import { jwtDecode } from "jwt-decode";
// import * as cookie from "../util/cookies.js";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIdRef = useRef(null);
  const userPassRef = useRef(null);
  const [formData, setFormData] = useState({ userId: "", userPass: "" });

  const isLogin = useSelector((state) => state.member.isLogin);

  useEffect(() => {
    if (isLogin) {
      alert("로그인에 성공하셨습니다");
      navigate("/");
    }
  }, [isLogin]);

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("8cf58becad913cbb691911f7434ea551");
      console.log(window.Kakao.isInitialized()); // SDK 초기화 여부 확인
    }
  }, []);

  const handleKakaoLogin = () => {
    if (!window.Kakao.isInitialized()) return;

    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj); // 인증 객체

        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            console.log(res);

            /*  dispatch(getIsLogin(res)); */
          },
          fail: (error) => {
            console.error(error);
          },
        });
      },
      fail: (err) => {
        console.error(err);
      },
    });
  };

  /*   const handleKakaoLoginRequest = async (accessToken) => {
    const url = "http://127.0.0.1:8080/member/kakaoLogin";
    const data = { accessToken };

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
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validationCheck({ formData, userIdRef, userPassRef })) {
      dispatch(getIsLogin({ formData }));
    }
  };

  return (
    <div className="content">
      <div className="login">
        <h2 className="login-title">Login</h2>
        <div className="login-title-kor">로그인</div>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <input
                className="login-input"
                type="text"
                name="userId"
                ref={userIdRef}
                value={formData.userId}
                onChange={handleChange}
                placeholder="ID"
              />
            </li>
            <li>
              <input
                className="login-input"
                type="password"
                name="userPass"
                ref={userPassRef}
                value={formData.userPass}
                onChange={handleChange}
                placeholder="Password"
              />
            </li>
            <li>
              <button className="login-button" type="submit">
                Login
              </button>
            </li>
          </ul>
          <div className="login-find">
            <Link to="/login/memberidfind"> 아이디찾기</Link>
            <Link to="/login/passwordfind"> 비밀번호찾기</Link>
          </div>
          <div>
            <ul className="login-sns">
              <li className="login-sns-button">
                <a
                  className="login-sns-link"
                  href="#"
                  onClick={handleKakaoLogin}
                >
                  <img
                    className="login-sns-image"
                    src="/memberimages/kakao.png"
                  />
                  &nbsp;Kakao
                </a>
              </li>
              <li className="login-sns-button">
                <a className="login-sns-link">
                  <img
                    className="login-sns-image"
                    src="/memberimages/naver.png"
                  />
                  &nbsp;Naver
                </a>
              </li>
            </ul>
          </div>
          <div className="login-bar"></div>
          <div>
            <ul className="login-join-box">
              <li className="login-join-button">
                <Link to="/signup"> 회원가입</Link>
              </li>
              <li className="login-join-button">
                <a href="">비회원 주문조회</a>
              </li>
            </ul>
            <div className="login-description-box">
              <p className="login-description">
                * 신규회원 3천원 쿠폰&카카오 플친 추가 천원 쿠폰증정
              </p>
              <p className="login-description">
                * 공식 온라인 스토어 단독 혜택 모든 제품 구매시 무료배송
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
