import { db } from "../database/database_mysql80.js";

export const getCarts = async (userId) => {

  const sql = `
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
  `;

  return db.execute(sql, [userId]).then((result) => result[0]);
};

const cartCheck = async (addList) => {
  const sql = `
    SELECT cid, qty 
    FROM pesade_cart
    WHERE pid = ? AND pgid = ? AND user_id = ?
  `;
  const [rows] = await db.execute(sql, [
    addList.pid,
    addList.pgid,
    addList.userId,
  ]);

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
    const params = [addList.userId, addList.pid, addList.pgid];
    const sql = `
    INSERT INTO pesade_cart (user_id, pid, pgid, cdate) 
    VALUES (?, ?, ?, NOW())
    `;
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  }

  console.log("장바구니체크1", cartResult);
  console.log("장바구니체크2", cartResult[0]);
  return { cnt: result_rows };
};

export const qtyIncrease = async (cid) => {
  let result_rows = 0;
  const sql = `update pesade_cart set qty = qty+1
                where cid = ?`;

  try {
    const [result] = await db.execute(sql, [cid.cid]);

    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};

export const qtyDecrease = async (cid) => {
  let result_rows = 0;
  const sql = `update pesade_cart set qty = qty-1
                where cid = ?`;

  try {
    const [result] = await db.execute(sql, [cid.cid]);

    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};

/* 

const cartCheck = async (items) => {
  const sql = `
  SELECT COUNT(cid) cnt, cid FROM ever_cart 
  WHERE pid = ? AND user_id = ?
  GROUP BY cid
  `;
  return db
    .execute(sql, [items.pid, items.userId])
    .then((result) => result[0][0]);
};
export const addCartItem = async (items, userId) => {
  if (!items.pid) {
    throw new Error("items.pid is undefined");
  }

  const checkResult = await cartCheck(items);
  let result_rows = 0;
  let sql = ``;

  if (checkResult === undefined) {
    // insert
    sql = `
    INSERT INTO ever_cart (pid, cdate, user_id)
    VALUES (?, now(), ?)
    `;
    const [result] = await db.execute(sql, [items.pid, userId]);
    result_rows = result.affectedRows;
  } else {
    // update
    sql = `
    UPDATE ever_cart 
    SET qty = qty + 1
    WHERE cid = ?
    `;
    const [result] = await db.execute(sql, [checkResult.cid]);
    result_rows = result.affectedRows;
  }

  return { cnt: result_rows };
};

export const getCartCount = async (userId) => {
  const sql = `SELECT COUNT(CID) count FROM ever_cart
  where user_id = ?`;

  return db.execute(sql, [userId]).then((result) => result[0][0]);
};

export const updateCartItem = async (item) => {
  const sql = `UPDATE ever_cart SET qty = ? WHERE cid = ?`;
  const [result] = await db.execute(sql, [item.newQty, item.cid]);
  return { affectedRows: result.affectedRows };
};

export const removeCartItem = async (cid, userId) => {
  const sql = `DELETE FROM ever_cart WHERE cid = ? AND user_id = ?`;
  const [result] = await db.execute(sql, [cid, userId]);
  return { affectedRows: result.affectedRows };
};

export const deleteItems = async (userId, items) => {
  const itemIds = items.map((item) => item.pid);
  const [result] = await db.query(
    `DELETE FROM ever_cart WHERE user_id = ? AND pid IN (?)`,
    [userId, itemIds]
  );
  return result;
}; */
