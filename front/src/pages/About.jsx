import React, { useState } from "react";
import "../css/about.css";
import SubTitle from "../components/SubTitle";
import AboutStory from "../components/about/AboutStory";
import AboutBelief from "../components/about/AboutBelief";
import AboutProcess from "../components/about/AboutProcess";
import AboutService from "../components/about/AboutService";

export default function About() {
  const [beliefClass, setBeliefClass] = useState("about-belief-img");
  useState(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setBeliefClass("about-belief-img");
      } else {
        setBeliefClass("about-belief-img scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="about-belief">
      <div className={beliefClass}>
        <img
          src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/category/editor/2024/05/30/6f67fafd15cb03a0654737a5dd47edb6.jpg"
          alt=""
          className="about-belief-image"
        />
      </div>
      <SubTitle title="about" />
      <AboutBelief />
      <AboutStory />
      <AboutProcess />
      <AboutService />
    </div>
  );
}
