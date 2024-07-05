import * as repository from "../repository/stockRepository.js";

export async function getStock(req, res) {
  const press = await repository.getStock();
  console.log("press-->", press);
  res.json(press);
  // res.end(); // res.json()은 response를 종료하기 때문에 res.end()는 필요하지 않습니다.
}
