import React from "react";
import "../../css/about.css";

export default function AboutBelief() {
  return (
    <li>
      <p className="about-belief-main">
        <img
          src="https://cdn.perfume-dev.com/cafe24-static/image/230321-OUR-STORY-1.png?w=800"
          alt=""
          className="about-belief-story-image"
        />

        <p className="about-belief-story">
          <li className="about-belief-subtitle">Our belief</li>
          <li className="about-belief-story-first">
            pesade는 향수 전문 셀렉트샵으로,
            <br />
            2016년부터 향수 유통에 집중하고 있으며
            <br />
            현재 약 800개 이상의 브랜드와 정식으로 직수입, 계약 또는 <br />
            공식수입사 입점을 통한 정품만 취급합니다.
          </li>
          <li className="about-belief-story-second">
            pesade는 국가기관 의약품협회에 화장품판매업을 등록하였고,
            <br /> 매년 화장품 책임판매업 교육을 꾸준히 수료하고 있으며,
            <br /> 수입되는 모든 제품은 정식 품질 관리 검사를 통해 <br />
            고객님들이 안심하고 최상의 정품만을 구매할 수 있도록 <br />
            빈틈없이 노력하고 있습니다.
          </li>
          <li className="about-belief-story-third">
            향을 찾아드리고 전달 드리는 모든 과정 속에서 <br />
            ‘제품 구매’ 그 이상의 경험을 느끼실 수 있도록, <br />
            pesade가 고객님만을 위한 향수 전문가가 되어드리겠습니다.
          </li>
        </p>
      </p>
    </li>
  );
}
