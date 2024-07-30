import * as repository from "../repository/orderRepository.js";

export const createOrder = async (req, res) => {
  const orderInfo = req.body;
  const result = await repository.createOrder(orderInfo);
  res.json(result);
};
export const orderDetail = async (req, res) => {
  const orderInfo = req.body;
  const result = await repository.orderDetail(orderInfo);
  res.json(result);
};

export const getUserInfo = async (req, res) => {
  const userId = req.params.userId;
  const result = await repository.getUserInfo(userId);
  res.json(result);
};

export const list = async (req, res) => {
  const { userId } = req.params; //
  console.log(userId);
  const result = await repository.list(userId);
  res.json(result);
};

/* qna detail */
export const detail = async (req, res) => {
  const { oid } = req.params;
  const result = await repository.detail(oid);
  res.json(result);
};

export const deleteOrder = async (req, res) => {
  const oid = req.body.oid;

  if (!oid) {
    return res.status(400).json({ error: "qid is required" });
  }

  try {
    const success = await repository.deleteOrder(oid);
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
