import * as repository from "../repository/reviewRepository.js";

export const list = async (req, res) => {
  const result = await repository.list();
  res.json(result);
};
