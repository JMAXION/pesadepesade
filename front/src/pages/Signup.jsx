import "../css/signup.css";
import SignupStep1 from "../components/SignupStep1";
import SignupStep2 from "../components/SignupStep2";
import SignupStep3 from "../components/SignupStep3";
import { useState } from "react";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    terms: false,
    personal: false,
    shop: false,
    smscheck: false,
    emailcheck: false,
    userId: "",
    userPass: "",
    userPassCheck: "",
    userName: "",
    zipcode: "",
    address: "",
    detailAddress: "",
    phoneNumber1: "010",
    phoneNumber2: "",
    phoneNumber3: "",
    emailId: "",
    emailDomain: "",
    gender: "",
    birthDate: "",
    year: "",
    month: "",
    day: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddress = (e) => {
    setFormData({ ...formData, zipcode: e.zipcode, address: e.address });
  };

  const handleCheck = (type, isChecked) => {
    if (type === "all") {
      setFormData({
        ...formData,
        terms: isChecked,
        personal: isChecked,
        shop: isChecked,
        smscheck: isChecked,
        emailcheck: isChecked,
      });
    } else if (type === "shopall") {
      setFormData({
        ...formData,
        shop: isChecked,
        smscheck: isChecked,
        emailcheck: isChecked,
      });
    } else {
      setFormData({ ...formData, [type]: !formData[type] });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="content">
      {step === 1 && (
        <SignupStep1
          nextStep={nextStep}
          formData={formData}
          handleCheck={handleCheck}
        />
      )}

      {step === 2 && (
        <SignupStep2
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
          handleAddress={handleAddress}
        />
      )}
      {step === 3 && <SignupStep3 />}
    </div>
  );
}
