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

// export const getIdFind = async (req, res) => {
//   try {
//     const formData = req.body;
//     const result = await repository.getIdFind(formData);

//     if (result.error) {
//       res.status(404).json(result);
//     } else {
//       res.json(result);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "서버 내부 오류" });
//   }
// };

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
