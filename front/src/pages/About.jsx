import React from "react";
import "../css/about.css";
import SubTitle from "../components/SubTitle";
import AboutStory from "../components/about/AboutStory";
import AboutBelief from "../components/about/AboutBelief";
import AboutProcess from "../components/about/AboutProcess";
import AboutService from "../components/about/AboutService";

export default function About() {
  return (
    <div className="about-belief">
      <img
        src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/05/30/6f67fafd15cb03a0654737a5dd47edb6.jpg"
        alt=""
        className="about-belief-image"
      />
      <SubTitle title="about" />
      <AboutBelief />
      <AboutStory />
      <AboutProcess />
      <AboutService />
    </div>
  );
}
