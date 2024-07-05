import "../css/signup.css";
import { handleFocus, validateCheckStep1 } from "../apis/validate.js";
import { Link } from "react-router-dom";

export default function Signup1Step1({ nextStep, formData, handleCheck }) {
  console.log("리액트 넥스트", nextStep);
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
            {/* 전체 동의 */}

            <div className="step1-agreeall">
              <h3>전체 동의</h3>
              <div className="agreeall-checkbox-container">
                <input
                  id="check1"
                  type="checkbox"
                  onChange={(e) => handleCheck("all", e.target.checked)}
                  onFocus={() => handleFocus("all")}
                />
                <label for="check1">✔</label>
                <p>
                  <strong>이용약관 및 개인정보수집 및 이용,</strong>
                </p>
              </div>
              <p>
                <strong>쇼핑정보 수신(선택)에 모두 동의합니다.</strong>
              </p>
              <p className="agreeall-last-p">
                <strong>
                  이용약관 및 개인정보수집 및 이용에 모두 동의합니다.
                </strong>
              </p>
            </div>
            <div>
              <div>
                <div className="step1-agree">
                  <div className="step1-agree-checkbox">
                    <input
                      id="check2"
                      type="checkbox"
                      className="step1-terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={(e) => handleCheck("terms", e.target.checked)}
                      onFocus={() => handleFocus("terms")}
                    />
                    <label for="check2">✔</label>
                    <span>
                      이용약관 동의 <strong>(</strong>필수
                      <strong>)</strong>
                    </span>
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
                  <div className="step1-agree-checkbox">
                    <input
                      id="check3"
                      type="checkbox"
                      className="step1-personal"
                      name="personal"
                      checked={formData.personal}
                      onChange={(e) =>
                        handleCheck("personal", e.target.checked)
                      }
                      onFocus={() => handleFocus("personal")}
                    />
                    <label for="check3">✔</label>
                    <span>
                      개인정보처리방침동의 <strong>(</strong>필수
                      <strong>)</strong>
                    </span>
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
                  <input
                    id="check4"
                    type="checkbox"
                    className="step1-shop"
                    name="shop"
                    checked={formData.shop}
                    onChange={(e) => handleCheck("shopall", e.target.checked)}
                    onFocus={() => handleFocus("shop")}
                  />
                  <label for="check4">✔</label>
                  <span>
                    쇼핑정보 수신 동의 <strong>(</strong>선택
                    <strong>)</strong>
                  </span>
                </div>
                <div className="step1-agree-ad">
                  <ul>
                    <li>
                      <strong>SMS</strong>수신을 동의하십니까? &nbsp;
                      <div className="step1-ad-checkbox">
                        <input
                          id="check5"
                          type="checkbox"
                          className="step1-smscheck"
                          name="smscheck"
                          checked={formData.smscheck}
                          onChange={(e) =>
                            handleCheck("smscheck", e.target.checked)
                          }
                          onFocus={() => handleFocus("smscheck")}
                        />
                        <label for="check5">✔</label> <span>동의함</span>
                      </div>
                    </li>
                    <li>
                      <strong>이메일</strong>수신을 동의하십니까? &nbsp;
                      <div className="step1-ad-checkbox">
                        <input
                          id="check6"
                          type="checkbox"
                          className="step1-emailcheck"
                          name="emailcheck"
                          checked={formData.emailcheck}
                          onChange={(e) =>
                            handleCheck("emailcheck", e.target.checked)
                          }
                          onFocus={() => handleFocus("emailcheck")}
                        />
                        <label for="check6">✔</label> <span>동의함</span>
                      </div>
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
                <button
                  className="step1-btn"
                  type="button"
                  onClick={() => validateCheckStep1(nextStep, formData)}
                >
                  다음
                </button>
                <Link to="/login">
                  <button className="step1-btn step1-btn-cancel" type="button">
                    취소
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
