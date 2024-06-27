export default function Login() {
  return (
    <div className="content">
      <div className="login">
        <h2>Login</h2>
        <div>로그인</div>
        <form action="">
          <ul>
            <li>
              <input type="text" name="userId" placeholder="ID" />
            </li>
            <li>
              <input type="password" name="userPass" placeholder="Password" />
            </li>
            <li>
              <button type="submit">Login</button>
            </li>
          </ul>
          <div>
            <a href="#">아이디찾기</a>
            <a href="#">비밀번호찾기</a>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">
                  <img src="/memberimages/kakao.png" /> Kakao
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/memberimages/naver.png" /> Naver
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">회원가입</a>
              </li>
              <li>
                <a href="">비회원 주문조회</a>
              </li>
            </ul>
            <p>* 신규회원 3천원 쿠폰&카카오 플친 추가 천원 쿠폰증정</p>
            <p>* 공식 온라인 스토어 단독 혜택 모든 제품 구매시 무료배송</p>
          </div>
        </form>
      </div>
    </div>
  );
}
