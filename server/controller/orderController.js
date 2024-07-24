import * as repository from '../repository/orderRepository.js';

export const createOrder = async (req, res) => {
     const params = req.body;
     const result = await repository.createOrder(params)
     res.json(result)
}

export const getUserInfo = async (req, res) => {
     const userId = req.params.userId; 
     const result =  await repository.getUserInfo(userId);
     res.json(result);
};
