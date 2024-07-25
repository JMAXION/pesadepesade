import { db } from '../database/database_mysql80.js';

export const createOrder = async (orderInfo) => {
     let result_rows = 0;
     console.log(orderInfo);
     const params =[
          orderInfo.orderNumber,
          orderInfo.userId,
          orderInfo.totalPrice
     ]
     const sql = `
     insert into pesade_order(oid,user_id,total_price,odate) values(?, ?, ?, now())
     `
     try {
          const [result] = await db.execute(sql, params);
      
          result_rows = result.affectedRows;
        } catch (error) {
          console.log(error);
        }
        return { cnt: result_rows };
      };

export const getUserInfo = async (userId) => {
     const sql = `
     select user_name, zipcode, address, phone, email from pesade_member
          where user_id = ? 
     `;

     return db.execute(sql, [userId]).then(([result]) => result[0]);
}