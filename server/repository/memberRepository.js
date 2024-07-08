import { promises as fsPromise } from "fs";
/* 
export const getLogin = async (userId, userPass) => {
  let login_result = 0;
  let login_token = "";

  const sql = `
  select count(user_id) cnt, any_value(user_pass) user_pass  
         from shoppy_member 
   	     where user_id = ?;
  `;

  try {
    const [result] = await db.execute(sql, [userId]);
    console.log("result -->>", result);

    if (result[0].cnt === 1) {
      const passCheck = bcrypt.compareSync(userPass, result[0].user_pass);
      if (passCheck) login_result = 1;
      //토큰 생성
      login_token = jwt.sign({ userId: userId }, "cmVhY3QxMjM0Cgo=");
    }
  } catch (error) {
    // console.log(error);
  }
  return {
    cnt: login_result,
    token: login_token,
  };
}; */

export const getSignup = async (formData) => {
  let result_rows = 0;
  const params = [
    formData.userId,
    bcrypt.hashSync(formData.userPass, 7).formData.userName,
    formData.userName,
    formData.zipcode,
    formData.address.concat("", formData.detailAddress),
    phone1.concat("-", phone2, "-", phone3),
    formData.emailId.concat("@", formData.emailDomain),
    formData.gender,
    formData.birthDate,
    formData.year.concat("년", formData.month, "월", formData.day, "일"),
  ];

  const sql = `
  insert into pesade_member( 
        user_id,
        user_pass,
        user_name,
        zipcode,
        address,
        phone,
        email,
        gender,
        bdate_type,
        bdate,
        signup_date

      )
  
  values(?,?,?,?,?,?,?,?,?,?,now())

  `;

  console.log("sql -->", sql);

  try {
    const [result] = await db.execute(sql.params);

    result_rows = result.affectedRows;
    console.log("rows -->", result.affectedRows);
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};
