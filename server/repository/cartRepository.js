import { db } from "../database/database_mysql80.js";

export const getCarts = async (userId) => {
  const sql = `select cid,
	   user_id,
       c.pid,
       c.qty,
       g.gift_option,
       p.pname,
       p.pdetail,
       CONCAT(FORMAT(p.pprice*c.qty,0),' krw') as price,
       p.pimage from pesade_cart c, pesade_product p, pesade_gift_option g
where p.pid = c.pid
AND user_id = c.user_id
AND c.pgid = g.pgid
AND c.user_id = ?`;
  return db.execute(sql, [userId.userId]).then((result) => result[0]);
};

export const addCart = async (addList) => {
  let result_rows = 0;
  const params = [addList.userId, addList.pid, addList.qty, addList.msg];
  const sql = `insert into pesade_cart(user_id,
                                       pid,
                                       qty,
                                       pgid,
                                       cdate) values(?, ?, ?, ?,  now())`;
  try {
    const [result] = await db.execute(sql, params);

    result_rows = result.affectedRows;
    console.log("rows -->", result.affectedRows);
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};

export const qtyIncrease = async (cid) => {
  let result_rows = 0;
  const sql = `update pesade_cart set qty = qty+1
                where cid = ?`;

  try {
    const [result] = await db.execute(sql, [cid.cid]);

    result_rows = result.affectedRows;
    console.log("rows -->", result.affectedRows);
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
    console.log("rows -->", result.affectedRows);
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};

/* import { db } from "../db/database_mysql.js";

export const getCarts = async (userId) => {
  const sql = `
    SELECT ec.user_id, ec.cid, ec.pid, ec.qty, ec.cdate, ep.ptitle as title, ep.price, ep.image 
    FROM ever_cart ec
    JOIN ever_product ep ON ep.pid = ec.pid
    WHERE ec.user_id = ?
  `;
  return db.execute(sql, [userId]).then((result) => result[0]);
};

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
