import { db } from "../database/database_mysql80.js";

export const createOrder = async (orderInfo) => {
  let result_rows = 0;

  const params = [
    orderInfo.orderNumber,
    orderInfo.userId,
    orderInfo.totalPrice,
  ];

  const sql = `
       INSERT INTO pesade_order(oid, user_id, total_price, odate)
       VALUES (?, ?, ?, NOW())
     `;

  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  } catch (error) {
    console.log("Error in createOrder:", error);
    throw error;
  }

  return { cnt: result_rows };
};

// orderDetail 함수: 주문 상세 정보를 삽입하는 함수
export const orderDetail = async (orderInfo) => {
  let result_rows = 0;

  try {
    // 주문 상세 정보를 저장할 배열
    const orderDetails = orderInfo.orderItem.map((item) => [
      orderInfo.orderNumber, // 주문 번호
      item.pid, // 상품 아이디
      item.qty, // 수량
      item.pprice, // 상품 가격
    ]);

    // 주문 상세 정보를 삽입할 SQL 문
    const sqlOrderDetail = `
         INSERT INTO pesade_order_detail(oid, pid, qty, pprice)
         VALUES (?, ?, ?, ?)
       `;

    // 주문 상세 정보를 순차적으로 삽입
    for (const paramsDetail of orderDetails) {
      const [result] = await db.execute(sqlOrderDetail, paramsDetail);
      result_rows += result.affectedRows;
    }
  } catch (error) {
    console.log("Error in orderDetail:", error);
    throw error;
  }

  return { cnt: result_rows };
};

export const getUserInfo = async (userId) => {
  const sql = `
     select user_name, zipcode, address, phone, email from pesade_member
          where user_id = ? 
     `;

  return db.execute(sql, [userId]).then(([result]) => result[0]);
};

export const list = async (userId) => {
  const sql = `
  SELECT 
    po.oid,
    CONCAT(' ', pp.pname, ' ', pp.pDetail) AS full_detail,
    COUNT(po.oid) AS order_count,
    po.total_price,
left(po.odate ,10) as odate 
FROM 
    pesade_order_detail pod
JOIN 
    pesade_product pp ON pod.pid = pp.pid
JOIN 
    pesade_order po ON po.oid = pod.oid
WHERE 
    po.user_id = ?
GROUP BY 
    po.oid, pp.pname, pp.pDetail, po.total_price, po.odate
ORDER BY 
    po.oid DESC
  `;
  return db.execute(sql, [userId]).then((result) => result[0]);
};
