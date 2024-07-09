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
j.jid as id, j.jcategory, j.jtitle, j.jdesc, j.jimg, j.jdate, j.jbranddesc, j.jcarouseltitle,
i.cimg1, i.cimg2, i.cimg3, i.cimg4, i.dimg1, i.dimg2, i.dimg3, i.dimg4, i.dimg5,
d.dtitle1, d.dtitle2, d.dtitle3, d.dtitle4, d.dtitle5, d.ddesc1, d.ddesc2, d.ddesc3, d.ddesc4, d.ddesc5, d.deditor
from journal_table j, detailimage_table i, journaldetail_table d 
where j.jid = i.jid and i.jid = d.jid and j.jid = ?;
;
  `;
  return db.execute(sql, [id]).then((result) => result[0][0]);
};
