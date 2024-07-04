import "../css/login.css";

export default function IdFind() {
  return (
    <div className="content">
      <div className="idfind">
        <h2 className="idfind-title">아이디 찾기</h2>
        <form className="idfind-container">
          <ul className="idfind-form-ul">
            <li className="idfind-form-group">
              <p className="idfind-form-label">회원구분</p>
              <div className="idfind-select">
                <select>
                  <option value="개인회원">개인회원</option>
                </select>
              </div>
            </li>
            <li className="idfind-form-group">
              <p className="idfind-form-label">인증방법</p>
              <div className="idfind-inputs">
                <input type="radio" name="authenticationMethod" checked />
                이메일
                <input type="radio" name="authenticationMethod" /> 휴대폰번호
              </div>
            </li>
            <li className="idfind-form-group">
              <p className="idfind-form-label">이름</p>
              <div className="idfind-input">
                <input />
              </div>
            </li>
            <li className="idfind-form-group">
              <p className="idfind-form-label">이메일</p>
              <div className="idfind-input">
                <input />
              </div>
            </li>
          </ul>
          <button className="idfind-btn" type="button">
            확인
          </button>
        </form>
      </div>
    </div>
  );
}
