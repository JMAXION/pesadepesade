import * as repository from "../repository/cartRepository.js";

export const getCarts = async (req, res) => {
  const userId = req.body;

  const cartList = await repository.getCarts(userId);

  res.json(cartList);
};

export const addCart = async (req, res) => {
  const addList = req.body;

  const addItem = await repository.addCart(addList);
  res.json(addItem);
};

export const qtyIncrease = async (req, res) => {
  const cid = req.body;
  const qtyList = await repository.qtyIncrease(cid);
  res.json(qtyList);
};

export const qtyDecrease = async (req, res) => {
  const cid = req.body;
  const qtyList = await repository.qtyDecrease(cid);
  res.json(qtyList);
};
