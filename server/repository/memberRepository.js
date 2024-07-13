import { db } from "../database/database_mysql80.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
  console.log("아이디 찾기 디비", formData);

  let sql = "";
  let result = "";
  if (formData.type == "useremail") {
    sql = `
  SELECT user_id FROM pesade_member
    WHERE user_name = ? AND email = ?    
  `;
    result = await db.execute(sql, formData.userName, formData.email);
  } else if (formData.type == "userphone") {
    sql = `
    SELECT user_id FROM pesade_member
    WHERE user_name = ? AND phone = ?    
    `;
    result = await db.execute(sql, formData.userName, formData.phone);
  }

  console.log("리절트1", result);
  console.log("리절트2", result[0]);
  console.log("리절트3", result[0][0]);
  return result[0] ? result[0] : null;
};
