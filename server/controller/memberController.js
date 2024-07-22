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

  res.json(result[0][0]);
};

export const getUpdatePassword = async (req, res) => {
  const { userId, newPassword } = req.body;
  const result = await repository.getUpdatePassword(userId, newPassword);

  res.json(result);
  res.end();
};

const verificationCodes = {}; // email을 키로, 인증번호를 값으로 하는 객체

const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "ea501d4ab826e6",
    pass: "c8b0d2598c504c",
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
  const { userId, email } = req.body;
  const verificationCode = generateVerificationCode();

  verificationCodes[email] = verificationCode;

  const content = {
    from: "pesade@pesade_project.kr",
    to: email,
    subject: "인증번호",
    text: `[인증번호:${verificationCode}] pesade 인증번호입니다.`,
  };

  try {
    const response = await sendEmail(content);

    const result = await repository.getSendMail(userId, verificationCode);

    res.json({ result, emailResponse: response });
  } catch (error) {
    console.error("Email sending or DB operation failed: ", error);
    res
      .status(500)
      .json({ error: "Email sending failed", details: error.toString() });
  }
};

export const getVerifycode = async (req, res) => {
  const { userId, verificationCode } = req.body;
  const result = await repository.getVerifycode(userId, verificationCode);

  res.json(result);
  res.end();
};

export const getKakaoLogin = async (req, res) => {
  const { accessToken } = req.body;
  const result = await repository.getKakaoLogin(accessToken);
  console.log("zk카카오엑토큰", accessToken);
  res.json(result);
  res.end();

  if (!accessToken) {
    return res.status(400).json({ message: "AccessToken is required" });
  }

  const loginResult = await getKakaoLogin(accessToken);

  if (loginResult.cnt === 1) {
    res.status(200).json(loginResult);
  } else {
    res.status(401).json({ message: loginResult.message });
  }
};
