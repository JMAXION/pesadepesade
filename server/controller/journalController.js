import * as repository from "../repository/journalRepository.js";

export async function getJournal(req, res) {
  const journal = await repository.getJournal();
  console.log("journal-->", journal);
  res.json(journal);
  // res.end(); // res.json()은 response를 종료하기 때문에 res.end()는 필요하지 않습니다.
}
export async function getJournalbyId(req, res) {
  const journalId = await repository.getJournalbyId(req.params.id);
  console.log("journalId-->", journalId);
  res.json(journalId);
  // res.end(); // res.json()은 response를 종료하기 때문에 res.end()는 필요하지 않습니다.
}
