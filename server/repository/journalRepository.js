import { db } from "../database/database_mysql80.js";

export const getJournal = async () => {
  const sql = `
  select jid as id, jcategory, jtitle, jdesc, jimg from journal_table
  `;
  return db.execute(sql).then((result) => result[0]);
};
export const getJournalbyId = async (id) => {
  const sql = `
  select did, 
  d.jid as id, 
  ddate, 
  ddesc1, ddesc2, 
  dcarouselimg1, dcarouselimg2, dcarouselimg3,
  ddetailimg1,ddetailimg2, ddetailimg3, ddetailimg4,ddetailimg5,ddetailimg6,
ddetailtitle1,ddetailtitle2,ddetailtitle3,ddetailtitle4,ddetailtitle5,ddetailtitle6,
ddetaildesc1,
ddetaildesc2,
ddetaildesc3,
ddetaildesc4,
ddetaildesc5,
ddetaildesc6,
  j.jcategory, j.jtitle, j.jdesc, j.jimg
  from journal_detail_table d, journal_table j 
  where d.jid = j.jid and d.jid = ?
  `;
  return db.execute(sql, [id]).then((result) => result[0][0]);
};
