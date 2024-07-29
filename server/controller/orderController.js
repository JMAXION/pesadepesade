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
