import * as repository from "../repository/cartRepository.js";

export const getCarts = async (req, res) => {
  const { userId } = req.body;

  const cartList = await repository.getCarts(userId);

  res.json(cartList);
};

export const addCart = async (req, res) => {
  const addList = req.body;

  const addItem = await repository.addCart(addList);
  
  res.json(addItem);
};

export const updateCartItem = async (req, res)=>{
  const { cid, newQty } = req.body;
  const result = await repository.updateCartItem({ cid, newQty });
  res.json({ success: result.affectedRows > 0 });
}

export const removeCartItem = async (req, res) => {
  const { cid } = req.body;
  console.log('장바구니아디',cid);
  const result = await repository.removeCartItem(cid)
  res.json(result)
}