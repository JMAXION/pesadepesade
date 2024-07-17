import PasswordFind from "../../pages/PasswordFind";
import PasswordRetrievalForm from "./PasswordRetrievalForm";
import { useState } from "react";
import axios from "axios";

export default function MemberPasswordFind() {
  const [step, setStep] = useState(1);

  const [idResult, setIdResult] = useState(null);

  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    email: "",
    phone: "",
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

  const handlePasswordFind = () => {
    const url = "http://127.0.0.1:8080/member/passwordfind";

    axios({
      method: "post",
      url: url,
      data: formData,
    })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
          console.log("res==========>", res.data);
        } else {
          setIdResult(res.data);
          setStep(2);
        }
      })
      .catch((error) => console.log(error));
  };

  console.log("passwordform==>", formData);

  return (
    <div className="content">
      {step === 1 && (
        <PasswordFind
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
          handlePhoneChange={handlePhoneChange}
          handlePasswordFind={handlePasswordFind}
        />
      )}
      {step === 2 && (
        <PasswordRetrievalForm formData={formData} idResult={idResult} />
      )}
    </div>
  );
}
