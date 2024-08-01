import { db } from "../database/database_mysql80.js";

// qna 등록
export const insert = async (qnaFormData) => {
  let result_rows = 0;
  let sql;
  let params;

  if (qnaFormData.isSecret) {
    sql = `
      INSERT INTO pesade_qboard(qtitle, user_id, qcontent, qhits, qpassword, qdate, is_secret)
      VALUES (?, ?, ?, 0, ?, now(), TRUE)
    `;
    params = [
      qnaFormData.qtitle,
      qnaFormData.user_id,
      qnaFormData.qcontent,
      qnaFormData.qformPs,
    ];
  } else {
    sql = `
      INSERT INTO pesade_qboard(qtitle, user_id, qcontent, qhits, qdate, is_secret)
      VALUES (?, ?, ?, 0, now(), FALSE)
    `;
    params = [qnaFormData.qtitle, qnaFormData.user_id, qnaFormData.qcontent];
  }

  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  } catch (error) {
    console.error(error);
  }
  return { cnt: result_rows };
};

/* qna list */

export const list = async () => {
  const sql = `
    select  row_number() over(order by qdate asc) as rno,
            qid, 
            qtitle, 
            user_id,
            left(qdate,10) as qdate,
             is_secret
    from pesade_qboard
  `;
  return db.execute(sql).then((result) => result[0]);
};

export const myList = async (userId) => {
  const sql = `
    select  row_number() over(order by qdate asc) as rno,
            qid, 
            qtitle, 
            user_id,
            left(qdate,10) as qdate,
             is_secret
    from pesade_qboard
    where user_id = ?
  `;
  return db.execute(sql, [userId]).then((result) => result[0]);
};

/* qna 수정 */
export const getUpdate = async (qna) => {
  let result_rows = 0;
  const params = [qna.qtitle, qna.qcontent, qna.qid];
  const sql = `
                update pesade_qboard set qtitle = ?, qcontent = ?
                where qid = ?`;
  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};

/* qna detail */

export const detail = async (qid) => {
  const sql = `
      select  
              qid,
              qtitle,
              user_id, 
              left(qdate,10) as qdate,
              qhits,
              qcontent
      from pesade_qboard
      where qid = ?
    `;
  return db.execute(sql, [qid]).then((result) => result[0][0]);
};

/* qna hits */

export const updateHits = async (qid) => {
  let result_rows = 0;
  const sql = `
    UPDATE pesade_qboard
    SET qhits = qhits + 1
    WHERE qid = ?
  `;

  try {
    const [result] = await db.execute(sql, [qid]);
    result_rows = result.affectedRows;
  } catch (error) {
    console.error(error);
  }

  return { cnt: result_rows };
};

/* 다음글 보기 */
export const getNext = async (qid) => {
  const sql = `
      SELECT qtitle, is_secret
      FROM pesade_qboard
      WHERE qid > ?
      ORDER BY qid ASC
      LIMIT 1;
    `;
  return db.execute(sql, [qid]).then((result) => result[0]);
};

/* 이전글 보기 */
export const getPrev = async (qid) => {
  const sql = `
      SELECT qtitle, is_secret
      FROM pesade_qboard
      WHERE qid < ?
      ORDER BY qid DESC
      LIMIT 1;
    `;
  return db.execute(sql, [qid]).then((result) => result[0]);
};

/* 비밀번호 확인 */
export const checkPassword = async (qid) => {
  const sql = `
    SELECT qpassword
    FROM pesade_qboard
    WHERE qid = ?
  `;
  const [result] = await db.execute(sql, [qid]);
  return result;
};

/* 댓글 */
export const getComments = async (qid) => {
  const sql = `SELECT * 
               FROM pesade_comments 
               WHERE qid = ? 
               ORDER BY created_at DESC`;
  try {
    const [rows] = await db.execute(sql, [qid]);
    return rows;
  } catch (error) {
    console.error("Error fetching comments from DB:", error);
    throw error;
  }
};

export const addComment = async (qid, user_id, comment_text) => {
  const sql = `INSERT INTO pesade_comments (qid, user_id, comment_text, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)`;
  try {
    const [result] = await db.execute(sql, [qid, user_id, comment_text]);
    if (result.affectedRows > 0) {
      return { success: true, commentId: result.insertId };
    } else {
      return { success: false, error: "Failed to insert comment" };
    }
  } catch (error) {
    console.error("Error inserting comment:", error);
    return { success: false, error: error.message };
  }
};

export const deleteComment = async (commentId) => {
  const sql = `
  DELETE FROM pesade_comments WHERE comment_id = ?
  `;
  const [result] = await db.execute(sql, [commentId]);
  return result.affectedRows > 0;
};

export const deleteQna = async (qid) => {
  const sql = `
  DELETE FROM pesade_qboard WHERE qid = ?
  `;
  const [result] = await db.execute(sql, [qid]);
  return result.affectedRows > 0;
};
