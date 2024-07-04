import { db } from "../database/database_mysql80.js";

/* qna 등록 */
export const insert = async (qnaFormData) => {
  let result_rows = 0;
  let sql;
  if (qnaFormData.isSecret) {
    sql = `
        INSERT INTO pesade_qboard(qtitle, user_id, qcontent, qhits, qpassword, qdate, is_secret)
        VALUES (?, 'test', ?, 0, ?, now(), TRUE)
      `;
  } else {
    sql = `
        INSERT INTO pesade_qboard(qtitle, user_id, qcontent, qhits, qdate, is_secret)
        VALUES (?, 'test', ?, 0, now(), FALSE)
      `;
  }

  try {
    const [result] = await db.execute(sql, [
      qnaFormData.qtitle,
      qnaFormData.qcontent,
      qnaFormData.qformPs, // 비밀글인 경우에만
    ]);
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
  update pesade_qboard
  set qhits = qhits+1
  where qid = ?
`;

  try {
    const [result] = await db.execute(sql, [qid]);
    console.log(result);
    result_rows = result.affectedRows;
  } catch (error) {}
  return { cnt: result_rows };
};

/* 다음글 보기 */
export const getNext = async (qid) => {
  const sql = `
      SELECT qtitle
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
      SELECT qtitle
      FROM pesade_qboard
      WHERE qid < ?
      ORDER BY qid DESC
      LIMIT 1;
    `;
  return db.execute(sql, [qid]).then((result) => result[0]);
};
