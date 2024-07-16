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

export const getUpdate = async (req, res) => {
  const notice = req.body;
  console.log(notice);
  const result = await repository.getUpdate(notice);
  res.json(result);
};

export const deleteNotice = async (req, res) => {
  const nid = req.body.nid;

  if (!nid) {
    return res.status(400).json({ error: "qid is required" });
  }

  try {
    const success = await repository.deleteNotice(nid);
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
