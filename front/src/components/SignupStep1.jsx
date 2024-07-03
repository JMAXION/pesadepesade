import "../css/signup.css";

export default function Signup1Step1() {
  return (
    <div className="content">
      <div className="step1">
        <h2 className="step1-title">Sign up</h2>
        <div className="step1-progress-bar">
          <div className="step1-progress-item">
            <div className="step1-progress-circle step1-circle-black">
              <span>1</span>
            </div>
            <div className="step1-progress-name">약관동의</div>
          </div>
          <div className="step1-progress-item">
            <div className="step1-progress-circle">
              <span>2</span>
            </div>
            <div className="step1-progress-name">정보입력</div>
          </div>
          <div className="step1-progress-item last-progress-item">
            <div className="step1-progress-circle">
              <span>3</span>
            </div>
            <div className="step1-progress-name">가입완료</div>
          </div>
        </div>
        <form>
          <div>
            <div className="step1-agreeall">
              <h3>전체 동의</h3>
              <p>
                <input className="step1-agreeall-checkbox" type="checkbox" />
                <label className="step1-agreeall-label">
                  <strong>이용약관 및 개인정보수집 및 이용,</strong>
                  <br />
                  <strong> 쇼핑정보 수신(선택)에 모두 동의합니다.</strong>
                  <br />
                  <strong>
                    이용약관 및 개인정보수집 및 이용에 모두 동의합니다.
                  </strong>
                </label>
              </p>
            </div>
            <div>
              <div>
                <div className="step1-agree">
                  <div>
                    <input type="checkbox" />
                    <span> 이용약관 동의 (필수)</span>
                  </div>
                  <span>
                    <a href="#">전체보기</a>
                  </span>
                </div>
                <textarea className="step1-textarea">
                  제1조(목적) 이 약관은 ㈜티비엘코퍼레이션(전자상거래 사업자)가
                  운영하는 페사드 온라인 쇼핑몰(이하 “몰”이라 한다)에서 제공하는
                  인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어
                  사이버 몰과 이용자의 권리.의무 및 책임사항을 규정함을 목적으로
                  합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                  성질에 반하지 않는 한 이 약관을 준용합니다.」 제2조(정의) ①
                  “몰”이란 ㈜티비엘코퍼레이션 회사가 재화 또는 용역(이하 “재화
                  등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등
                  정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한
                  가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의
                  의미로도 사용합니다.
                </textarea>
              </div>
              <div>
                <div className="step1-agree">
                  <div>
                    <input type="checkbox" />
                    <span> 개인정보처리방침동의 (필수)</span>
                  </div>
                  <a href="#">전체보기</a>
                </div>
                <textarea className="step1-textarea ">
                  제1조(목적) 이 약관은 ㈜티비엘코퍼레이션(전자상거래 사업자)가
                  운영하는 페사드 온라인 쇼핑몰(이하 “몰”이라 한다)에서 제공하는
                  인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어
                  사이버 몰과 이용자의 권리.의무 및 책임사항을 규정함을 목적으로
                  합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                  성질에 반하지 않는 한 이 약관을 준용합니다.」 제2조(정의) ①
                  “몰”이란 ㈜티비엘코퍼레이션 회사가 재화 또는 용역(이하 “재화
                  등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등
                  정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한
                  가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의
                  의미로도 사용합니다.
                </textarea>
              </div>
              <div>
                <div className="step1-agree step1-agree-shop">
                  <input type="checkbox" />
                  <span> 쇼핑정보 수신 동의 (선택)</span>
                </div>
                <div className="step1-agree-sns">
                  <ul>
                    <li>
                      <strong>SMS</strong>수신을 동의하십니까? &nbsp;
                      <input type="checkbox" /> 동의함
                    </li>
                    <li>
                      <strong>이메일</strong>수신을 동의하십니까? &nbsp;
                      <input type="checkbox" /> 동의함
                    </li>
                  </ul>
                </div>
                <textarea className="step1-textarea">
                  제1조(목적) 이 약관은 ㈜티비엘코퍼레이션(전자상거래 사업자)가
                  운영하는 페사드 온라인 쇼핑몰(이하 “몰”이라 한다)에서 제공하는
                  인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어
                  사이버 몰과 이용자의 권리.의무 및 책임사항을 규정함을 목적으로
                  합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                  성질에 반하지 않는 한 이 약관을 준용합니다.」 제2조(정의) ①
                  “몰”이란 ㈜티비엘코퍼레이션 회사가 재화 또는 용역(이하 “재화
                  등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등
                  정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한
                  가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의
                  의미로도 사용합니다.
                </textarea>
              </div>
              <div className="step1-btns">
                <button className="step1-btn" type="button">
                  다음
                </button>
                <button className="step1-btn step1-btn-cancel" type="button">
                  취소
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
