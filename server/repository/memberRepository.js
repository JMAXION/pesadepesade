import { db } from "../database/database_mysql80.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//1

export const getSignup = async (formData) => {
  // console.log("formdata=>", formData);
  let result_rows = 0;

  let phone1 = formData.phoneNumber1;
  let phone2 = formData.phoneNumber2;
  let phone3 = formData.phoneNumber3;

  const params = [
    formData.userId,
    bcrypt.hashSync(formData.userPass, 7),
    formData.userName,
    formData.zipcode,
    formData.address.concat("", formData.detailAddress),
    phone1.concat("-", phone2, "-", phone3),
    formData.emailId.concat("@", formData.emailDomain),
    formData.gender,
    formData.birthDate,
    formData.year.concat("년", formData.month, "월", formData.day, "일"),
  ];

  const sql = `
  insert into pesade_member( 
                              user_id,
                              user_pass,
                              user_name,
                              zipcode,
                              address,
                              phone,
                              email,
                              gender,
                              bdate_type,
                              bdate,
                              signup_date

  )
  
  values(?,?,?,?,?,?,?,?,?,?,now())

  `;

  try {
    const [result] = await db.execute(sql, params);

    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};

export const getLogin = async (userId, userPass) => {
  let login_result = 0;
  let login_token = "";

  const sql = `
  select count(user_id) cnt, any_value(user_pass) user_pass
      from pesade_member
      where user_id = ?;
  `;

  try {
    const [result] = await db.execute(sql, [userId]);

    // console.log("result=>>>>>>>", result);

    if (result[0].cnt === 1) {
      const passCheck = bcrypt.compareSync(userPass, result[0].user_pass);
      if (passCheck) login_result = 1;

      login_token = jwt.sign({ userId: userId }, "cmVhY3QxMjM0Cgo=");
    }
  } catch (error) {
    console.log(error);
  }

  return {
    cnt: login_result,
    token: login_token,
  };
};

export const getIdCheck = async (userId) => {
  const sql = `
  select count(user_id) cnt from pesade_member where user_id = ?
  `;

  return await db.execute(sql, [userId]).then((result) => result[0][0]);
};

export const getIdFind = async (formData) => {
  let sql = "";
  let result = "";
  if (formData.type == "useremail") {
    sql = `
  SELECT user_id, email, signup_date FROM pesade_member
    WHERE user_name = ? AND email = ?    
  `;
    result = await db.execute(sql, [formData.userName, formData.email]);
  } else if (formData.type == "userphone") {
    sql = `
    SELECT user_id, email, signup_date FROM pesade_member
    WHERE user_name = ? AND phone = ?    
    `;
    result = await db.execute(sql, [formData.userName, formData.phone]);
  }

  if (result[0] && result[0].length > 0) {
    return {
      user_id: result[0][0].user_id,
      email: result[0][0].email,
      signup_date: result[0][0].signup_date,
    };
  } else {
    return { error: "사용자를 찾을 수 없습니다" };
  }
};

export const getPasswordFind = async (formData) => {
  let sql = "";
  let result = "";

  if (!formData.userId) {
    return { error: "아이디를 입력하세요." };
  }

  if (!formData.userName) {
    return { error: "이름을 입력하세요." };
  }

  if (formData.type === "useremail" && !formData.email) {
    return { error: "이메일을 입력하세요." };
  }

  if (formData.type === "userphone" && !formData.phone) {
    return { error: "전화번호를 입력하세요." };
  }

  if (formData.type === "useremail") {
    sql = `
      SELECT count(*) as cnt FROM pesade_member 
      WHERE user_id = ?
        AND user_name = ?
        AND email = ?
    `;
    result = await db.execute(sql, [
      formData.userId,
      formData.userName,
      formData.email,
    ]);
  } else if (formData.type === "userphone") {
    if (user.phone !== formData.phone) {
      return { error: "아이디와 일치하는 전화번호가 없습니다." };
    }

    sql = `
      SELECT count(*) as cnt FROM pesade_member
      WHERE user_id = ?
        AND user_name = ?
        AND phone = ?
    `;
    result = await db.execute(sql, [
      formData.userId,
      formData.userName,
      formData.phone,
    ]);
  }

  return result;
};

export const getUpdatePassword = async (userId, newPassword) => {
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const sql = `
    UPDATE pesade_member
    SET user_pass = ?
    WHERE user_id = ?
    `;
  return await db.execute(sql, [hashedPassword, userId.user_id]);
};

export const getSendMail = async (userId, verificationCode) => {
  try {
    // userId가 pesade_member 테이블에 존재하는지 확인
    const userCheckSql =
      "SELECT COUNT(*) AS count FROM pesade_member WHERE user_id = ?";
    const [userCheckResult] = await db.execute(userCheckSql, [userId]);

    if (userCheckResult[0].count === 0) {
      throw new Error(
        `User ID ${userId} does not exist in pesade_member table.`
      );
    }

    // 이메일 인증 코드 저장
    const sql = `
      INSERT INTO email_verification (user_id, code)
      VALUES (?, ?)
    `;
    return await db.execute(sql, [userId, verificationCode]);
  } catch (error) {
    throw new Error(`Failed to save verification code: ${error.message}`);
  }
};

/* export const getUserByKakaoId = async (kakaoId) => {
  const sql = `SELECT * FROM pesade_member WHERE kakao_id = ?`;
  const [result] = await db.execute(sql, [kakaoId]);
  return result[0]; 
};
 */
