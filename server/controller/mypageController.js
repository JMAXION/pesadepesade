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

export const getUpdateUserData = async (req, res) => {
  const { userId, formData } = req.body;
  const result = await repository.getUpdateUserData(userId, formData);

  res.json(result);
  res.end();
};

export const getDeleteUserData = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getDeleteUserData(userId);

  res.json(result);
  res.end();
};

export const getProfileImage = async (req, res) => {
  const userId = req.query.userId;
  console.log(`Received request to get profile image for userId: ${userId}`); // 로그 추가

  try {
    const profileImageUrl = await repository.getProfileImageUrl(userId);
    if (profileImageUrl) {
      console.log(`Sending profile image URL: ${profileImageUrl}`); // 로그 추가
      res.send({ profileImageUrl });
    } else {
      console.log("User not found"); // 로그 추가
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error fetching profile image:", err); // 로그 추가
    res.status(500).send(err);
  }
};

export const uploadProfileImage = async (req, res) => {
  const userId = req.body.userId;
  const profileImageUrl = `/uploads/profile/${req.file.filename}`; // 수정된 부분

  console.log("upload", profileImageUrl, userId);
  try {
    await repository.updateProfileImageUrl(userId, profileImageUrl);
    res.send({ profileImageUrl });
  } catch (err) {
    res.status(500).send(err);
  }
};
