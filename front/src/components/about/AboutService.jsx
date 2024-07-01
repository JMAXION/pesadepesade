import React from "react";
import "../../css/about.css";

export default function AboutService() {
  return (
    <div className="about-service">
      <li className="about-service-stories">
        <p className="about-service-subtitle">Our Service</p>
        <p className="about-service-story">
          <p>
            온라인 샵에서 제공하는 제품들을 백화점과는 달리
            <br /> 매우 자유로운 분위기 속에서 마음껏 시향하실 수 있는
            <br /> 오프라인 스토어를 운영 중이며,
            <br /> 직원들의 전문적인 취향 맞춤 추천서비스를
            <br /> 받아 보실 수 있는 공간입니다.
          </p>
          <p>
            또한, 위치 등의 여건으로 오프라인 공간에서의 <br />
            시향이 여의치 않으신 고객님들까지 고려하여, <br />
            단순 시향지가 아닌 일주일 이상 향기가 지속되는 샤쉐 스톤과 함께
            <br />
            어디서도 찾을 수 없는 섬세한 인사이트까지 담아낸
            <br /> 시향서비스 ‘센츠하다’ 또한 제공하고 있습니다.
          </p>
        </p>
      </li>
      <img
        src="https://cdn.perfume-dev.com/cafe24-static/image/230321-OUR-STORY-5.png?w=800"
        alt=""
        className="about-service-image"
      />
    </div>
  );
}
