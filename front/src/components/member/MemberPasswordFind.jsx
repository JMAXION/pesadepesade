import PasswordFind from "../../pages/PasswordFind";
import PasswordRetrievalForm from "./PasswordRetrievalForm";
import { useState } from "react";

export default function MemberPasswordFind() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    email: "",
    phone: "",
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

  console.log("passwordform==>", formData);
  console.log("passwordnext ==>", nextStep);

  return (
    <div className="content">
      {step === 1 && (
        <PasswordFind
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
          handlePhoneChange={handlePhoneChange}
        />
      )}
      {step === 2 && (
        <PasswordRetrievalForm nextStep={nextStep} formData={formData} />
      )}
    </div>
  );
}
