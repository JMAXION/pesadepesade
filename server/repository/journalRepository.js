import { db } from "../database/database_mysql80.js";

export const getJournal = async () => {
  const sql = `
  select jid as id, jcategory, jtitle, jdesc, jimg from journal_table
  `;
  return db.execute(sql).then((result) => result[0]);
};
export const getJournalbyId = async (id) => {
  const sql = `
  select 
j.jid, j.jcategory, j.jtitle, j.jdesc, j.jimg, d.jid, d.dtitleimage, d.ddate, d.ddesc1, d.ddesc2, c.carouselid, c.carouselimg1, c.carouselimg2, c.carouselimg3
from journal_table j, journal_detail_table d, journal_carousel c
where j.jid = d.jid and d.carouselid = c.cid and d.jid = ?
;
  `;
  return db.execute(sql, [id]).then((result) => result[0][0]);
};
