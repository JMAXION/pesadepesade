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

export const getDeleteUserData = async (userId) => {
  userId = typeof userId !== "undefined" ? userId : null;

  const sql = `
  delete from pesade_member where user_id = ?
  `;

  const result = await db.execute(sql, [userId]);
  return result[0].affectedRows;
};
