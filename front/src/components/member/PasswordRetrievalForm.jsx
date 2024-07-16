import "../../css/login.css";

export default function PasswordRetrievalForm() {
  return (
    <div className="content">
      <div className="passwordretrievalform">
        <h2 className="password-title">비밀번호 찾기</h2>

        <div className="passwordretrievalform-box">
          <strong style={{ fontSize: "20px" }}>
            인증에 성공하였습니다!🍓🍒🍑
          </strong>
          <p>사용하실 비밀번호를 입력해 주세요.</p>
          <div className="passwordretrievalform-div">
            <p>새 비밀번호</p>
            <input type="text" />
          </div>
          <div className="passwordretrievalform-div">
            <p>비밀번호 확인</p>
            <input type="password" />
          </div>
        </div>

        <div className="passwordretrievalform-button">
          <button className="passwordretrievalform-btn" type="button">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
