import * as repository from '../repository/productRepository.js';

export async function getProduct(req, res, next) {
 
  const params = req.body;
  const products = await repository.getProduct(params);
  res.json(products);
  // res.end(); // res.json()은 response를 종료하기 때문에 res.end()는 필요하지 않습니다.
}
