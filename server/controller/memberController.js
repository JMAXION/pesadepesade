import * as repository from "../repository/memberRepository.js";
import nodemailer from "nodemailer";

//1

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
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "178e04a947fd9b",
    pass: "96aca9032bf2b2",
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

  // 이메일과 인증코드를 저장합니다
  verificationCodes[email] = verificationCode;

  // 이메일 전송을 위한 내용 설정
  const content = {
    from: "pesade@pesade_project.kr",
    to: email,
    subject: "인증번호",
    text: `[인증번호:${verificationCode}] pesade 인증번호입니다.`,
  };

  try {
    // 이메일을 전송합니다
    const response = await sendEmail(content);

    // 이메일 전송 결과와 함께 응답을 보냅니다
    const result = await repository.getSendMail(userId, verificationCode);
    console.log("서버 컨트롤러 ==>", userId, verificationCode);
    res.json({ result, emailResponse: response });
  } catch (error) {
    // 에러 발생 시 에러 메시지를 보냅니다
    res
      .status(500)
      .json({ error: "Email sending failed", details: error.toString() });
  }
};

export const getVerifycode = async (req, res) => {
  const { email, verificationCode } = req.body;
  console.log("인증 코드 확인 요청 수신:", verificationCode);
  if (!req.body.email || !req.body.verificationCode) {
    return res
      .status(400)
      .json({ message: "이메일 및 인증 코드가 필요합니다." });
  }
  // 저장된 인증번호 가져오기
  const savedCode = verificationCodes[email];

  if (savedCode && verificationCode == savedCode) {
    res.status(200).json({ message: "인증 성공." });
  } else {
    res
      .status(400)
      .json({ message: "인증 실패. 유효하지 않은 인증 코드입니다." });
  }
};

export const getKakaoLogin = async (req, res) => {
  const { accessToken } = req.body;
  const loginResult = await kakaoLogin(accessToken);

  if (loginResult.cnt === 1) {
    res.status(200).json(loginResult);
  } else {
    res.status(401).json({ message: loginResult.message });
  }
};
