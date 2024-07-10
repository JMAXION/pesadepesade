import * as repository from '../repository/productRepository.js';

export async function getProduct(req, res, next) {
 
  const params = req.body;
  const products = await repository.getProduct(params);
  res.json(products);

}


export async function getItem(req, res, next) {
 
  const params = req.params.pid;

  const products = await repository.getItem(params);
  res.json(products);

}


export async function getGift(req, res, next) {
 
  const params = req.body;

  const products = await repository.getGift(params);
  res.json(products);
  
}
