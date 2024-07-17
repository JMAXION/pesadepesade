import * as repository from "../repository/memberRepository.js";

export const getSignup = async (req, res) => {
  const formData = req.body;
  const result = await repository.getSignup(formData);
  res.json(result);
  res.end();
};

export const getLogin = async (req, res) => {
  const { userId, userPass } = req.body;
  const result = await repository.getLogin(userId, userPass);

  res.json(result);
  res.end();
};

export const getIdCheck = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getIdCheck(userId);

  res.json(result);
  res.end();
};

export const getIdFind = async (req, res) => {
  const formData = req.body;
  const result = await repository.getIdFind(formData);

  res.json(result);
  // res.end();
};

export const getPasswordFind = async (req, res) => {
  const formData = req.body;
  const result = await repository.getPasswordFind(formData);

  res.json(result);

  /*   try {
    const result = await repository.getPasswordFind(formData); // repository에서 결과 가져오기
    res.status(200).json(result); // 성공적인 응답
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message }); // 오류 메시지 반환
  } */
};

export const getUpdatePassword = async (req, res) => {
  const { userId, newPassword } = req.body;
  const result = await repository.getUpdatePassword(userId, newPassword);

  res.json(result);
  res.end();

  /* 
  if (!userId || !newPassword) {
    return res
      .status(400)
      .json({ message: "userId 또는 newPassword가 필요합니다." });
  }

  try {
    await getUpdatePassword(userId, newPassword);
    res.status(200).json({ message: "비밀번호가 성공적으로 변경되었습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  } */
};

/* export const getKakaoLogin = async (req, res) => {
  const { accessToken } = req.body;

  try {
    const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userId = data.id; 
  

    res.json({ cnt: 1, token: "generated_jwt_token" }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ cnt: 0, message: "Login failed" });
  }
};
 */
