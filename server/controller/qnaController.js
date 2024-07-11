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

/* qna pw 체크 */
export const checkPassword = async (req, res) => {
  const { qid, password } = req.body;

  try {
    const result = await repository.checkPassword(qid);
    if (result.length > 0 && result[0].qpassword === password) {
      res.json({ isValid: true });
    } else {
      res.json({ isValid: false });
    }
  } catch (error) {
    console.error(error);
  }
};

/* 댓글 달기 */
export const getComments = async (req, res) => {
  const { qid } = req.params;
  try {
    const comments = await repository.getComments(qid);
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ success: false, error: "Failed to fetch comments" });
  }
};

export const addComment = async (req, res) => {
  const { qid, user_id, comment_text } = req.body;

  if (!qid || !user_id || !comment_text) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required parameters" });
  }

  try {
    const result = await repository.addComment(qid, user_id, comment_text);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const commentId = parseInt(req.params.commentId, 10);
  const success = await repository.deleteComment(commentId);

  if (success) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: "Failed to delete comment" });
  }
};

/* uploadImage */
