import React from "react";
import SubTitle from "../components/SubTitle";
import "../css/footer.css";
export default function Contact() {
  return (
    <div className="content">
      <SubTitle title="Contact us" />
      <div className="contact-container">
        <img
          src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/wJk/img/contact/contact.png"
          alt="contact-us"
        />
        <h1>Customer center</h1>
        <p className="contact-content">
          +82 2 6956-0053
          <br />
          info@pesade.kr
          <br />
          mon-fri 10:00 - 17:00
          <br />
          (lunch 11:30am - 1:00pm)
        </p>
      </div>
    </div>
  );
}
