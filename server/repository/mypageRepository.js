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

  const params = [
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
      UPDATE pesade_member
      SET user_pass = ?, 
          user_name = ?, 
          zipcode = ?, 
          address = ?, 
          phone = ?,
          email = ?, 
          gender = ?, 
          bdate_type = ?, 
          bdate = ?
      WHERE user_id = ?
  `;
  const result = await db.execute(sql, [userId, ...params]);
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

export const getProfileImageUrl = (userId) => {
  return new Promise((resolve, reject) => {
    const query =
      "SELECT profile_image_url FROM pesade_member WHERE user_id = ?";
    db.execute(query, [userId], (err, results) => {
      if (err) {
        console.error("Database query error:", err); // 에러 로그 추가
        return reject(err);
      }
      if (results.length > 0) {
        console.log("Query results:", results); // 쿼리 결과 로그 추가
        resolve(results[0].profile_image_url);
      } else {
        console.log("No results found for userId:", userId); // 결과 없음 로그 추가
        resolve(null);
      }
    });
  });
};

export const updateProfileImageUrl = (userId, profileImageUrl) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE pesade_member SET profile_image_url = ? WHERE user_id = ?";
    db.execute(sql, [profileImageUrl, userId], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
