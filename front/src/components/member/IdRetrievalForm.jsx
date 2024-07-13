import { Link } from "react-router-dom";
import "../../css/login.css";
import { data } from "jquery";

export default function IdRetrievalForm({ formData }) {
  return (
    <div className="content">
      <div className="idretrievalform">
        <h2 className="idfind-title">아이디 찾기</h2>
        <div className="idretrieval-info">
          <p style={{ fontSize: "15px" }}>아이디 찾기가 완료되었습니다.</p>
          <p style={{ fontSize: "13px", fontWeight: "400" }}>
            가입된 아이디가 총 <strong>1개</strong> 있습니다.
          </p>
        </div>

        <div className="idretrieval-details">
          <div className="idretrieval-user">
            <p className="idretrieval-label">이 름</p>
            <p className="idretrieval-value">김혜림</p>
          </div>
          <div className="idretrieval-user">
            <p className="idretrieval-label">이메일</p>
            <p className="idretrieval-value">
              <strong>test@gmail.com</strong>
            </p>
          </div>
        </div>
        <div className="idretrieval-options">
          <input type="radio" checked />
          <p>
            test****** (개인회원, <strong>2024-06-24</strong> 가입)
          </p>
        </div>
        <div className="idretrieval-button">
          <Link to="/login">
            <div className="idretrieval-login">로그인</div>
          </Link>
          <Link to="/login/passwordfind">
            <div className="idretrieval-passwordfind">비밀번호 찾기</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
