import * as repository from "../repository/noticeRepository.js";

/* qna 등록 */
export const insert = async (req, res) => {
  const ntcFormData = req.body;
  console.log(ntcFormData);
  const result = await repository.insert(ntcFormData);
  res.json(result);
  console.log(result);
};

export const list = async (req, res) => {
  const result = await repository.list();
  res.json(result);
};

export const detail = async (req, res) => {
  const { nid } = req.params;
  const result = await repository.detail(nid);
  res.json(result);
};

export const updateHits = async (req, res) => {
  const { nid } = req.body;
  const result = await repository.updateHits(nid);
  res.json(result);
};
