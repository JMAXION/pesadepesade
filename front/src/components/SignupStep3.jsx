import { Link } from "react-router-dom";
import "../css/signup.css";

export default function SignupStep3({ formData }) {
  return (
    <div className="content">
      <div className="step3">
        <h2 className="step3-title">회원가입 완료</h2>

        {/* PROGRESS */}
        <div className="step3-progress-bar">
          <div className="step3-progress-item">
            <div className="step3-progress-circle step3-circle-white ">
              <span>✔</span>
            </div>
            <div className="step3-progress-name">약관동의</div>
          </div>
          <div className="step3-progress-item">
            <div className="step3-progress-circle step3-circle-white">
              <span>✔</span>
            </div>
            <div className="step3-progress-name">정보입력</div>
          </div>
          <div className="step3-progress-item last-progress-item">
            <div className="step3-progress-circle step3-circle-black">
              <span>3</span>
            </div>
            <div className="step3-progress-name">가입완료</div>
          </div>
        </div>

        {/* 회원가입 완료 */}
        <div className="step3-welcome">
          <p className="step3-complete">회원가입이 완료되었습니다.</p>
          <p className="step3-member-info">
            <strong>
              <span>{formData.userName}</span>
            </strong>
            님은&nbsp;
            <strong>[일반회원]</strong>&nbsp; 회원이십니다.
          </p>
        </div>

        <div className="step3-user-details">
          <div className="step3-user-detail">
            <p className="step3-detail-label">아이디</p>
            <p className="step3-detail-value">{formData.userId}</p>
          </div>
          <div className="step3-user-detail">
            <p className="step3-detail-label step3-name-label">이 름</p>
            <p className="step3-detail-value">{formData.userName}</p>
          </div>
          <div className="step3-user-detail">
            <p className="step3-detail-label">이메일</p>
            <p className="step3-detail-value">
              {formData.emailId}@{formData.emailDomain}
            </p>
          </div>
        </div>

        <div className="step3-main-link">
          <Link to="/">메인으로</Link>
        </div>
      </div>
    </div>
  );
}
