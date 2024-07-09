import "../css/signup.css";
import { /* handleFocus, */ validateCheckStep1 } from "../apis/validate.js";
import { Link } from "react-router-dom";

export default function SignupStep1({ nextStep, formData, handleCheck }) {
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
                  /*  onFocus={() => handleFocus("all")} */
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
                      /*   onFocus={() => handleFocus("terms")} */
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
                  의미로도 사용합니다. ② “이용자”란 “몰”에 접속하여 이 약관에
                  따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                  ③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로
                  “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다. ④
                  ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는
                  서비스를 이용하는 자를 말합니다.
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
                      /*     onFocus={() => handleFocus("personal")} */
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
                  1. 개인정보 수집목적 및 이용목적 가. 서비스 제공에 관한 계약
                  이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공 , 구매 및 요금
                  결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및
                  금융 서비스 나. 회원 관리 회원제 서비스 이용에 따른 본인확인 ,
                  개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 ,
                  가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시
                  법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항
                  전달 2. 수집하는 개인정보 항목 : 이름 , 로그인ID , 비밀번호 ,
                  이메일 , 14세미만 가입자의 경우 법정대리인의 정보 3.
                  개인정보의 보유기간 및 이용기간 원칙적으로, 개인정보 수집 및
                  이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단,
                  다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안
                  보존합니다. 가. 회사 내부 방침에 의한 정보 보유 사유 o
                  부정거래 방지 및 쇼핑몰 운영방침에 따른 보관 : OO년 나. 관련
                  법령에 의한 정보보유 사유 o 계약 또는 청약철회 등에 관한 기록
                  -보존이유 : 전자상거래등에서의소비자보호에관한법률 -보존기간 :
                  5년 o 대금 결제 및 재화 등의 공급에 관한 기록 -보존이유:
                  전자상거래등에서의소비자보호에관한법률 -보존기간 : 5년 o
                  소비자 불만 또는 분쟁처리에 관한 기록 -보존이유 :
                  전자상거래등에서의소비자보호에관한법률 -보존기간 : 3년 o 로그
                  기록 -보존이유: 통신비밀보호법 -보존기간 : 3개월 ※ 동의를
                  거부할 수 있으나 거부시 회원 가입이 불가능합니다.
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
                        />
                        <label for="check6">✔</label> <span>동의함</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <textarea className="step1-textarea">
                  할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는
                  유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다. 단,
                  주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와
                  관계없이 발송됩니다. 선택 약관에 동의하지 않으셔도 회원가입은
                  가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지
                  수신여부를 변경하실 수 있습니다.
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
