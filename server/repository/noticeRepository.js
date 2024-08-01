import { db } from "../database/database_mysql80.js";

// 공지 등록
export const insert = async (ntcFormData) => {
  let result_rows = 0;

  // 로그인한 유저 아이디가 "admin"인지 확인
  if (ntcFormData.user_id !== "admin") {
    return { cnt: 0 };
  }

  const sql = `
    INSERT INTO pesade_nboard(ntitle, user_id, ncontent, nhits, ndate)
    VALUES (?, 'admin', ?, 0, now())
  `;

  try {
    const [result] = await db.execute(sql, [
      ntcFormData.ntitle,
      ntcFormData.ncontent,
    ]);
    result_rows = result.affectedRows;
  } catch (error) {
    console.error(error);
  }
  return { cnt: result_rows };
};

// notice list
export const list = async () => {
  let rows = [];
  const sql = `
      SELECT 
        nid,
        ntitle, 
        user_id,
        LEFT(ndate, 10) AS ndate,
        nhits
        FROM pesade_nboard
        ORDER BY nid DESC
    `;

  try {
    const [result] = await db.execute(sql);
    rows = result;
  } catch (error) {
    console.error(error);
  }
  return rows;
};

// notice detail
export const detail = async (nid) => {
  const sql = `
        select  
                nid,
                ntitle,
                user_id, 
                left(ndate,10) as ndate,
                nhits,
                ncontent
        from pesade_nboard
        where nid = ?
      `;
  return db.execute(sql, [nid]).then((result) => result[0][0]);
};

export const updateHits = async (nid) => {
  let result_rows = 0;
  const sql = `
    update pesade_nboard
    set nhits = nhits+1
    where nid = ?
  `;

  try {
    const [result] = await db.execute(sql, [nid]);
    result_rows = result.affectedRows;
  } catch (error) {}
  return { cnt: result_rows };
};

/* 수정 */

/* qna 수정 */
export const getUpdate = async (notice) => {
  let result_rows = 0;
  const params = [notice.ntitle, notice.ncontent, notice.nid];
  const sql = `
                update pesade_nboard set ntitle = ?, ncontent = ?
                where nid = ?`;
  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};

export const deleteNotice = async (nid) => {
  const sql = `
  DELETE FROM pesade_nboard WHERE nid = ?
  `;
  const [result] = await db.execute(sql, [nid]);
  return result.affectedRows > 0;
};
