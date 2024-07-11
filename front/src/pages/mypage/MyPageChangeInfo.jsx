import React, { useState } from "react";
import SubTitle from "../../components/SubTitle";
import "../../css/mypage.css";
import InfoChangeStep1 from "../../components/mypage/InfoChangeStep1.jsx";
import InfoChangeStep2 from "../../components/mypage/InfoChangeStep2.jsx";

export default function MyPageChangeInfo() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <div>
      {step === 1 && <InfoChangeStep1 nextstep={nextStep} />}
      {step === 2 && <InfoChangeStep2 />}
    </div>
  );
}
