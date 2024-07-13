import IdFind from "../../pages/IdFind";
import IdRetrievalForm from "./IdRetrievalForm";
import { useEffect, useState } from "react";

export default function MemberIdFind() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    type: "useremail",
    phoneNumber1: "",
    phoneNumber2: "",
    phoneNumber3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };
      updatedFormData.phone = `${updatedFormData.phoneNumber1}-${updatedFormData.phoneNumber2}-${updatedFormData.phoneNumber3}`;
      return updatedFormData;
    });
  };

  return (
    <div className="content">
      {step === 1 && (
        <IdFind
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
          handlePhoneChange={handlePhoneChange}
        />
      )}
      {step === 2 && (
        <IdRetrievalForm nextStep={nextStep} formData={formData} />
      )}
    </div>
  );
}
