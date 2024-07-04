import "../css/login.css";

export default function PasswordFind() {
  return (
    <div className="content">
      <div className="password">
        <h2 className="password-title">비밀번호 찾기</h2>
        <form className="password-container">
          <ul className="password-form-ul">
            <li className="password-form-group">
              <p className="password-form-label">회원구분</p>
              <div className="password-select">
                <select>
                  <option value="개인회원">개인회원</option>
                </select>
              </div>
            </li>
            <li className="password-form-group">
              <p className="password-form-label">인증방법</p>
              <div className="password-inputs">
                <input type="radio" name="authenticationMethod" checked />
                이메일
                <input type="radio" name="authenticationMethod" /> 휴대폰번호
              </div>
            </li>
            <li className="password-form-group">
              <p className="password-form-label">아이디</p>
              <div className="password-input password-input-id">
                <input />
              </div>
            </li>
            <li className="password-form-group">
              <p className="password-form-label">이름</p>
              <div className="password-input">
                <input />
              </div>
            </li>
            <li className="password-form-group">
              <p className="password-form-label">이메일</p>
              <div className="password-input">
                <input />
              </div>
            </li>
          </ul>
          <button className="password-btn" type="button">
            확인
          </button>
        </form>
      </div>
    </div>
  );
}
