import * as repository from "../repository/pressRepository.js";

export async function getPress(req, res) {
  const press = await repository.getProduct();
  res.json(press);
  // res.end(); // res.json()은 response를 종료하기 때문에 res.end()는 필요하지 않습니다.
}
