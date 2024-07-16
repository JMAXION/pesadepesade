import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/mypage.css";
import InfoChangeStep1 from "../../components/mypage/InfoChangeStep1.jsx";
import InfoChangeStep2 from "../../components/mypage/InfoChangeStep2.jsx";

export default function MyPageChangeInfo() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const [infoChange, setInfoChange] = useState([]);
  const url = "http://localhost:8080/infoChange";

  useEffect(() => {
    axios({
      method: "post",
      url: url,
    })
      .then((res) => {
        console.log(res.data);
        setInfoChange(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {step === 1 && <InfoChangeStep1 nextstep={nextStep} />}
      {step === 2 && <InfoChangeStep2 />}
    </div>
  );
}
