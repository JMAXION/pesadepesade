import { db } from "../database/database_mysql80.js";

export const getStock = async () => {
  const sql = `
  select sid, sname, saddress, sphone, sopentime from stock_table
  `;
  return db.execute(sql).then((result) => result[0]);
};
