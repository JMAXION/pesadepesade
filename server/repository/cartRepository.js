import { db } from "../database/database_mysql80.js";

export const getCarts = async (userId) => {
  const sql =`
    SELECT 
        pc.user_id, 
        pc.cid, 
        pc.pid, 
        pp.pimage, 
        pp.pname,
        pp.pdetail, 
        pg.gift_option, 
        pc.qty, 
        pp.pprice
    FROM 
        pesade_cart pc
    JOIN 
        pesade_product pp ON pc.pid = pp.pid
    JOIN 
        pesade_gift_option pg ON pc.pgid = pg.pgid
    WHERE 
        pc.user_id = ?
  `

  return db.execute(sql, [userId]).then((result) => result[0]);
};



const cartCheck = async (addList) => {
  const sql = `
    SELECT cid, qty 
    FROM pesade_cart
    WHERE pid = ? AND pgid = ? AND user_id = ?
  `;
  const [rows] = await db.execute(sql, [addList.pid, addList.pgid, addList.userId]);

  return rows;
};

export const addCart = async (addList) => {

  let result_rows = 0;

  const cartResult = await cartCheck(addList);
  if (cartResult.length > 0) {
    const cartResultRow = cartResult[0];
    const sql = `
    UPDATE pesade_cart 
    SET qty = qty + 1 
    WHERE cid = ?
    `;
    const [result] = await db.execute(sql, [cartResultRow.cid]);
    result_rows = result.affectedRows;
  } else {
    const params = [
      addList.userId,
      addList.pid,
      addList.pgid
    ];
    const sql = `
    INSERT INTO pesade_cart (user_id, pid, pgid, cdate) 
    VALUES (?, ?, ?, NOW())
    `;
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  }
  
    console.log('장바구니체크1',cartResult);
    console.log('장바구니체크2',cartResult[0]);
  return { cnt: result_rows };
};
