import * as repository from "../repository/qnaRepository.js";

/* qna 등록 */
export const insert = async (req, res) => {
  const qnaFormData = req.body;
  const result = await repository.insert(qnaFormData);
  res.json(result);
};

/* qna list */
export const list = async (req, res) => {
  const result = await repository.list();
  res.json(result);
};

/* qna detail */
export const detail = async (req, res) => {
  const { qid } = req.params;
  const result = await repository.detail(qid);
  res.json(result);
};

/* qna hits update */
export const updateHits = async (req, res) => {
  const { qid, qpassword } = req.body;
  const result = await repository.updateHits(qid, qpassword);
  res.json(result);
};

/* 다음글 보기 */
export const getNext = async (req, res) => {
  const { qid } = req.params;
  const isSecret = req.body.isSecret;
  const result = await repository.getNext(qid, isSecret);
  res.json(result);
};

/* 이전글 보기 */
export const getPrev = async (req, res) => {
  const { qid } = req.params;
  const isSecret = req.body.isSecret;
  const result = await repository.getPrev(qid, isSecret);
  res.json(result);
};
