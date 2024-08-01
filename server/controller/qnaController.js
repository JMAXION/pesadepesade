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

export const myList = async (req, res) => {
  const { userId } = req.params; // 또는 req.query 등에서 userId를 가져올 수 있습니다.
  try {
    const result = await repository.myList(userId);
    res.json(result);
  } catch (error) {
    console.error("Error fetching Q&A list:", error);
  }
};

/* 게시물 수정 */
export const getUpdate = async (req, res) => {
  const qna = req.body;
  const result = await repository.getUpdate(qna);
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
  const { qid, userId, comment_text } = req.body;

  if (!qid || !userId || !comment_text) {
    return res.status(400).json({ success: false, error: "error" });
  }

  try {
    const result = await repository.addComment(qid, userId, comment_text);
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
    res.status(400).json({ success: false, error: "error" });
  }
};

/* 게시물 삭제 */
export const deleteQna = async (req, res) => {
  const qid = req.body.qid;

  if (!qid) {
    return res.status(400).json({ error: "qid is required" });
  }

  try {
    const success = await repository.deleteQna(qid);
    if (success) {
      res.json({ cnt: 1 });
    } else {
      res.status(404).json({ error: "No record found with that qid" });
    }
  } catch (error) {
    console.error("Error deleting record:", error);
    res.status(500).json({ error: "Database error" });
  }
};
