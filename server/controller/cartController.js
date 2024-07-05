import * as repository from "../repository/cartRepository.js";

export const getCarts = async (req, res) => {
  const { userId } = req.body;
  const cartList = await repository.getCarts(userId);
  res.json(cartList);
};
