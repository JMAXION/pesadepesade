/**
 *
 * Step1
 *
 */

export const validateCheckStep1 = (nextStep, formData) => {
  console.log("step==>> ", formData);

  if (!formData.terms && !formData.personal) {
    alert("약관에 동의해 주세요");
    /*     document.getElementById("check2").style.border = "10px solid red";
    document.getElementById("check3").style.border = "10px solid red"; */
  } else if (!formData.terms) {
    alert("이용 약관에 동의해 주세요");
    /*   document.getElementById("check2").style.border = "10px solid red"; */
  } else if (!formData.personal) {
    alert("개인정보처리방침에 동의해 주세요");
    /*  document.getElementById("check3").style.border = "10px solid red"; */
  } else {
    nextStep();
  }
};

/* export const handleFocus = (type) => {
  console.log("type ==>", type);
  if (type === "terms") {
    document.getElementById("check2").style.border = "none";
  } else if (type === "personal") {
    document.getElementById("check3").style.border = "none";
  } else if (type === "all") {
    document.getElementById("check2").style.border = "none";
    document.getElementById("check3").style.border = "none";
  }
};
 */
/**
 *
 * Step2
 *
 */

export const validateCheckStep2 = (formData, refs) => {
  let checkFlag = true;

  console.log("Ref=>", refs);
  console.log("form=>", formData.userId);
  console.log("form2=>", formData.userPass);

  if (!formData.userId) {
    alert("아이디를 입력해 주세요.");
    refs.userIdRef.current.focus();
    checkFlag = false;
  } else if (!formData.userPass) {
    alert("비밀번호를 입력해 주세요.");
    refs.userPassRef.current.focus();
    checkFlag = false;
  } else if (refs.userPassCheckRef.current.value === "") {
    alert("비밀번호 확인을 입력해 주세요.");
    refs.userPassCheckRef.current.focus();
    checkFlag = false;
  } else if (refs.userNameRef.current.value === "") {
    alert("이름을 입력해 주세요.");
    checkFlag = false;
  } else if (refs.phoneNumber2Ref.current.value === "") {
    alert("휴대폰 가운데 자리를 입력해 주세요.");
    checkFlag = false;
  } else if (refs.phoneNumber3Ref.current.value === "") {
    alert("휴대폰 뒷자리를 입력해 주세요.");
    checkFlag = false;
  } else if (!formData.emailId || !formData.emailDomain) {
    alert("이메일을 입력해 주세요.");
    checkFlag = false;
  }
  return checkFlag;
};

export const passCheck = (refs) => {
  let checkFlag = true;
  const pass = refs.userPassRef.current;
  const passCheck = refs.userPassCheckRef.current;

  if (pass.value !== passCheck.value) {
    alert("비밀번호가 동일하지 않습니다. 다시 입력해 주세요.");
    pass.value = "";
    passCheck.value = "";
    pass.focus();
    checkFlag = false;
  } else {
    alert("비밀번호가 동일합니다");
  }
  return checkFlag;
};

export const changeEmailDomain = (e, refs, handleChange) => {
  console.log(e.target.name);
  console.log(e.target.value);

  const name = e.target.name;
  const value = e.target.value;

  if (value === "self") {
    refs.emailDomainRef.current.value = "";
    refs.emailDomainRef.current.focus();
  } else {
    refs.emailDomainRef.current.value = value;
  }
  handleChange(e);
};
