import IdFind from "../../pages/IdFind";
import IdRetrievalForm from "./IdRetrievalForm";
import { useState } from "react";
import axios from "axios";

export default function MemberIdFind() {
  const [step, setStep] = useState(1);

  const [idResult, setIdResult] = useState(null);

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

  const handleIdFind = () => {
    const url = "http://127.0.0.1:8080/member/idfind";

    axios({
      method: "post",
      url: url,
      data: formData,
    })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          setIdResult(res.data);
          setStep(2);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="content">
      {step === 1 && (
        <IdFind
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
          handlePhoneChange={handlePhoneChange}
          handleIdFind={handleIdFind}
        />
      )}
      {step === 2 && (
        <IdRetrievalForm formData={formData} idResult={idResult} />
      )}
    </div>
  );
}
