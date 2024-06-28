import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="logo">
          <img
            src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/wJk/img/common/pesade-logo-ivory.png"
            alt="pesade"
          ></img>
        </div>
        <section className="footer-menu">
          <ul>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/help">
              <li>Help</li>
            </Link>
            <Link to="/notice">
              <li>Notice</li>
            </Link>
            <Link to="/qna">
              <li>Q&A</li>
            </Link>
          </ul>
        </section>
        <section className="small-links legal">
          <ul>
            <a>
              <li>Terms of service</li>
            </a>
            <li>|</li>
            <a>
              <li>Privacy policy</li>
            </a>
          </ul>
        </section>
        <section className="footer-info">
          <p>
            주식회사 티비엘코퍼레이션 | Business License: 832-86-02239
            <br className="mobile-only" />
            CEO: 목영교 | 페사드 서울 용산구 이태원로49길 16
            <br />
            Mall Order License : 제 2023-서울용산-1237
            <a
              href="#none"
              onclick="window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8328602239', 'bizCommPop', 'width=750, height=950;');return false;"
            >
              [사업자정보확인]
            </a>
            <br className="mobile-only" />
            Customer care: 02-6956-0053
            <br className="mobile-only" />
            E-mail: <a href="mailto:info@pesade.kr">info@pesade.kr</a>
          </p>
        </section>
        <section className="small-links social-media">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/pesade_official/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li> | </li>
            <li>
              <a href="https://www.facebook.com/pesadeofficial" target="_blank">
                Facebook
              </a>
            </li>
            <li>|</li>
            <li>
              <a
                href="https://www.pinterest.co.kr/pesade_official/_created/"
                target="_blank"
              >
                Pinterest
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="http://pf.kakao.com/_AJxnUb" target="_blank">
                Kakao
              </a>
            </li>
          </ul>
        </section>
        <section className="footer-copyright">© 2023 pesade</section>
      </div>
    </div>
  );
}
