import * as repository from "../repository/qnaRepository.js";

/* qna 등록 */
export const insert = async (req, res) => {
  const qnaFormData = req.body;
  console.log(qnaFormData);
  const result = await repository.insert(qnaFormData);
  console.log("result", result);
  res.json(result);
};

/* qna list */

export const list = async (req, res) => {
  const result = await repository.list();
  res.json(result);
};

/* qna detail */
export const detail = async (req, res) => {
  const qid = req.params.qid;
  console.log(qid);
  const result = await repository.detail(qid);
  res.json(result);
  console.log("result", result);
};

/* qna hits update */
export const updateHits = async (req, res) => {
  const { qid } = req.body;
  const result = await repository.updateHits(qid);
  res.json(result);
};

/* 다음글 보기 */

export const getNext = async (req, res) => {
  const { qid } = req.params;
  const result = await repository.getNext(qid);
  res.json(result);
};

/* 이전글 보기 */

export const getPrev = async (req, res) => {
  const { qid } = req.params;
  const result = await repository.getPrev(qid);
  res.json(result);
};
