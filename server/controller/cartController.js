import * as repository from "../repository/cartRepository.js";

export const getCarts = async (req, res) => {
  const { userId } = req.body;
  const cartList = await repository.getCarts(userId);
  res.json(cartList);
};


export const addCart = async (req,res) =>{
  const addList = req.body;
  console.log(addList);
  const addItem = await repository.addCart(addList)
  res.json(addItem)
}