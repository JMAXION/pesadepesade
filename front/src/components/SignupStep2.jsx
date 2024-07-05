import "../css/signup.css";

export default function SignupStep2() {
  return (
    <div className="content">
      <div className="step2">
        <h2 className="step2-title">회원가입</h2>

        {/* PROGRESS */}
        <div className="step2-progress-bar">
          <div className="step2-progress-item">
            <div className="step2-progress-circle step2-circle-white ">
              <span>✔</span>
            </div>
            <div className="step2-progress-name">약관동의</div>
          </div>
          <div className="step2-progress-item">
            <div className="step2-progress-circle step2-circle-black">
              <span>2</span>
            </div>
            <div className="step2-progress-name">정보입력</div>
          </div>
          <div className="step2-progress-item last-progress-item">
            <div className="step2-progress-circle">
              <span>3</span>
            </div>
            <div className="step2-progress-name">가입완료</div>
          </div>
        </div>

        {/* 회원인증 */}
        <div className="step2-titlearea">
          <h3>회원인증</h3>
        </div>
        <div className="step2-membertype">
          <input type="radio" checked />
          <label>개인회원</label>
        </div>

        {/* 기본정보 */}
        <div className="step2-titlearea">
          <h3>기본정보</h3>
          <span>- 필수</span>
        </div>
        <ul>
          <li className="step2-member-li step2-member-li-id">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>아이디</p>
            </div>
            <input className="step2-member-id-input" />
            <button className="step2-idcheck-btn" type="button">
              중복확인
            </button>
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>비밀번호</p>
            </div>
            <input />
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>비밀번호 확인</p>
            </div>
            <input />
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>이름</p>
            </div>
            <input type="text" />
          </li>
          <li className="step2-member-address">
            <div className="step2-member-address-box">
              <div className="step2-member-li-name ">
                <p>주소</p>
              </div>
              <div className="step2-member-address-input">
                <input
                  className="step2-postcode"
                  type="button"
                  placeholder="우편번호"
                />
                <button>주소검색</button>
              </div>
            </div>
            <input className="step2-address-basic" placeholder="기본주소" />
            <br />
            <input
              className="step2-address-detail"
              placeholder="나머지 주소(선택 입력 가능)"
            />
            {/* <div>
              <DaumPostCode />
            </div> */}
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <p>일반전화</p>
            </div>
            <div className="step2-member-phone-group">
              <select className="step2-member-phone">
                <option>02</option>
                <option>031</option>
                <option>032</option>
                <option>033</option>
              </select>
              -
              <input className="step2-member-phone" />
              -
              <input className="step2-member-phone" />
            </div>
          </li>
          <li className="step2-member-li">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>휴대전화</p>
            </div>
            <div className="step2-member-phone-group">
              <select className="step2-member-phone">
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
                <option>019</option>
              </select>
              -
              <input className="step2-member-phone" />
              -
              <input className="step2-member-phone" />
            </div>
          </li>
          <li className="step2-member-li step2-member-li-email">
            <div className="step2-member-li-name">
              <span>*</span>
              <p>이메일</p>
            </div>
            <div className="step2-member-email-group">
              <input className="step2-member-email" />@
              <input className="step2-member-email" />
              <select>
                <option value="self">직접입력</option>
                <option value="naver.com">네이버</option>
                <option value="gmail.com">구글</option>
                <option value="hotmail.com">MS</option>
              </select>
            </div>
          </li>
        </ul>

        {/* 추가정보 */}
        <div className="step2-titlearea">
          <h3>추가정보</h3>
        </div>
        <div className="step2-additional-info">
          <div className="step2-member-gender">
            <div className="step2-member-li-name">
              <p>성별</p>
            </div>
            <div className="step2-gender-selection">
              <input
                className="step2-gender-input"
                type="radio"
                name="gender"
              />
              남자
              <input
                className="step2-gender-input"
                type="radio"
                name="gender"
              />
              여자
            </div>
          </div>

          <>
            <div className="step2-member-birthdate">
              <div className="step2-member-li-name">
                <p>생년월일</p>
              </div>
              <div className="step2-birthdate-selection">
                <input
                  className="step2-birthdate-input"
                  type="radio"
                  name="birthdate"
                  checked
                />
                양력
                <input
                  className="step2-birthdate-input"
                  type="radio"
                  name="birthdate"
                />
                음력
              </div>
            </div>
            <div className="step2-date-input">
              <div>
                <input />년<input />월 <input />일
              </div>
            </div>
          </>

          <button className="step2-submit-btn" type="button">
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}
