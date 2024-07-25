import * as repository from "../repository/mypageRepository.js";

export const getPassConfirm = async (req, res) => {
  const { userId, userPass } = req.body;
  const result = await repository.getPassConfirm(userId, userPass);

  res.json(result);
  res.end();
};

export const getUserData = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getUserData(userId);

  res.json(result);
  res.end();
};

export const getDeleteUserData = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getDeleteUserData(userId);

  res.json(result);
  res.end();
};
