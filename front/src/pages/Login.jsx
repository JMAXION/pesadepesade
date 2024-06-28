import "../css/hyerim.css";

export default function Login() {
  return (
    <div className="hyerim_content">
      <div className="login">
        <h2 className="login_title">Login</h2>
        <div className="login_title_kor">로그인</div>
        <form action="">
          <ul>
            <li>
              <input
                className="login_input"
                type="text"
                name="userId"
                placeholder="  ID"
              />
            </li>
            <li>
              <input
                className="login_input"
                type="password"
                name="userPass"
                placeholder="  Password"
              />
            </li>
            <li>
              <button className="login_button" type="submit">
                Login
              </button>
            </li>
          </ul>
          <div className="login_find">
            <a href="#">아이디찾기</a>
            <a href="#">비밀번호찾기</a>
          </div>
          <div>
            <ul className="login_sns">
              <li className="login_sns_button">
                <a className="login_sns_link" href="#">
                  <img
                    className="login_sns_image"
                    src="/memberimages/kakao.png"
                  />
                  &nbsp;Kakao
                </a>
              </li>
              <li className="login_sns_button">
                <a className="login_sns_link" href="#">
                  <img
                    className="login_sns_image"
                    src="/memberimages/naver.png"
                  />
                  &nbsp;Naver
                </a>
              </li>
            </ul>
          </div>
          <div className="login_bar"></div>
          <div>
            <ul className="login_join_box">
              <li className="login_join_button">
                <a href="">회원가입</a>
              </li>
              <li className="login_join_button">
                <a href="">비회원 주문조회</a>
              </li>
            </ul>
            <div className="login_description_box">
              <p className="login_description">
                * 신규회원 3천원 쿠폰&카카오 플친 추가 천원 쿠폰증정
              </p>
              <p className="login_description">
                * 공식 온라인 스토어 단독 혜택 모든 제품 구매시 무료배송
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
