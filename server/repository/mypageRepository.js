import { db } from "../database/database_mysql80.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export const getPassConfirm = async (userId, userPass) => {
  const sql = `
  select user_pass from pesade_member where user_id = ?
  `;

  try {
    const [rows] = await db.execute(sql, [userId]);
    const user = rows[0];

    if (!user) {
      throw new Error("User not found");
    }

    const match = await bcrypt.compare(userPass, user.user_pass);

    if (match) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Password confirmation failed");
  }
};

export const getUserData = async (userId) => {
  const sql = `
  select * from pesade_member where user_id = ?
  `;
  const [rows] = await db.execute(sql, [userId]);
  return rows;
};

export const getUpdateUserData = async (userId, formData) => {
  let phone1 = formData.phoneNumber1;
  let phone2 = formData.phoneNumber2;
  let phone3 = formData.phoneNumber3;

  let params = [
    formData.userName,
    formData.zipcode,
    formData.address.concat("", formData.detailAddress),
    phone1.concat("-", phone2, "-", phone3),
    formData.emailId.concat("@", formData.emailDomain),
    formData.gender,
    formData.birthDate,
    formData.year.concat("년", formData.month, "월", formData.day, "일"),
  ];

  let sql = `
        UPDATE pesade_member
        SET user_name = ?, 
          zipcode = ?, 
          address = ?, 
          phone = ?,
          email = ?, 
          gender = ?, 
          bdate_type = ?, 
          bdate = ?
  `;

  if (formData.userPass) {
    const hashedPassword = bcrypt.hashSync(formData.userPass, 7);
   // sql += `, user_pass = ?`;
    params.push(hashedPassword);
  }

  //sql += ` WHERE user_id = ?`;

  params.push(userId);

  const result = await db.execute(sql, params);

  return result;
};

export const getDeleteUserData = async (userId) => {
  userId = typeof userId !== "undefined" ? userId : null;
  const sql = `
  delete from pesade_member where user_id = ?
  `;

  const result = await db.execute(sql, [userId]);
  return result[0].affectedRows;
};
