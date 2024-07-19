import { db } from "../database/database_mysql80.js";

/* qna list */

export const list = async () => {
  const sql = `
      select  row_number() over(order by rdate asc) as rno,
              rid, 
              rtitle, 
              user_id,
              left(rdate,10) as rdate
      from pesade_reviews
    `;
  return db.execute(sql).then((result) => result[0]);
};
