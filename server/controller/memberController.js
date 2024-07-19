import * as repository from "../repository/memberRepository.js";
import nodemailer from "nodemailer";

export const getSignup = async (req, res) => {
  const formData = req.body;
  const result = await repository.getSignup(formData);
  res.json(result);
  res.end();
};

export const getLogin = async (req, res) => {
  const { userId, userPass } = req.body;
  const result = await repository.getLogin(userId, userPass);

  res.json(result);
  res.end();
};

export const getIdCheck = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getIdCheck(userId);

  res.json(result);
  res.end();
};

export const getIdFind = async (req, res) => {
  const formData = req.body;
  const result = await repository.getIdFind(formData);

  res.json(result);
};

export const getPasswordFind = async (req, res) => {
  const formData = req.body;
  const result = await repository.getPasswordFind(formData);

  res.json(result);
};

export const getUpdatePassword = async (req, res) => {
  const { userId, newPassword } = req.body;
  const result = await repository.getUpdatePassword(userId, newPassword);

  res.json(result);
  res.end();
};

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "946cf122004ad1",
    pass: "73c32e5c3f204f",
  },
});

const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const sendEmail = async (data) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(data, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
};

export const getSendMail = async (req, res) => {
  const { email } = req.body;
  const verificationCode = generateVerificationCode();

  // const result = await repository.getSendMail(email);

  const content = {
    from: "info@pesade_project.kr",
    to: email,
    subject: "인증번호",
    text: `인증번호는 ${verificationCode} 입니다.`,
  };

  try {
    const response = await sendEmail(content);
    res.json({ result, emailResponse: response });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Email sending failed", details: error.toString() });
  }
};

export const getVerifycode = async (req, res) => {
  const { verificationCode } = req.body;

  const emailVerificationCode = generateVerificationCode();

  if (verificationCode === emailVerificationCode) {
    res.status(200).json({ message: "인증 성공." });
  } else {
    res
      .status(400)
      .json({ message: "인증 실패. 유효하지 않은 인증 코드입니다." });
  }
};

/* export const getKakaoLogin = async (req, res) => {
  const { accessToken } = req.body;

  try {
    const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userId = data.id; 
  

    res.json({ cnt: 1, token: "generated_jwt_token" }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ cnt: 0, message: "Login failed" });
  }
};
 */
