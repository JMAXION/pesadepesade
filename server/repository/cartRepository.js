import { db } from "../database/database_mysql80.js";

export const getCarts = () => {};


export const addCart = async(addList) =>{
  console.log(addList);
  let result_rows = 0;
  const params = [
    addList.userId,
    addList.pid,
    addList.qty
    
  ]
  const sql = `insert into pesade_cart(user_id,
                                       pid,
                                       qty,
                                       cdate) values(?, ?, ?, now())`
    try {
    const [result] = await db.execute(sql, params);

    result_rows = result.affectedRows;
    console.log("rows -->", result.affectedRows);
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
}

