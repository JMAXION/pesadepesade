import { db } from '../database/database_mysql80.js';

export const createOrder = async (params) => {
     const sql = `
     
     `
} 

export const getUserInfo = async (userId) => {
     const sql = `
     select user_name, zipcode, address, phone, email from pesade_member
          where user_id = ? 
     `;

     return db.execute(sql, [userId]).then(([result]) => result[0]);
}