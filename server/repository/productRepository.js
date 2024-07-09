import { db } from "../database/database_mysql80.js";

export const getProduct = async (params) => {
  console.log(params);
  let sql = "";
  if (params.type === "all") {
    sql = `select *  from pesade_product p, pesade_category c 
            where p.category_id = c.category_id
            order  by c.category_name desc`;
  } else if (params.type != "all") {
    sql = `SELECT *
            FROM pesade_product p
            JOIN pesade_category c ON p.category_id = c.category_id
            WHERE c.category_name = ?
            ORDER BY pname DESC `;
  }
  return db.execute(sql, [params.type]).then((result) => result[0]);
};

export const getItem = async (params) => {
  const sql = `select pid,
                      pname,
                      pdetail,
                      pscentdetail,
                      pdesc,
                      FORMAT(pprice,0) as pprice,
                      category_id,
                      pinfo,
                      pnotice,
                      pimage,
                      pdetailimage from pesade_product
                      where pid =  ?`
return db.execute(sql, [params]).then((result) => result[0][0]);                
}