import { db } from "../database/database_mysql80.js";

export const getProduct = async () => {
  const sql = `
  select pid, ptitle, pdesc, pseason, pimg, plink from press_table
  `;
  return db.execute(sql).then((result) => result[0]);
};
