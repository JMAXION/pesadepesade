import { db } from "../database/database_mysql80.js";

export const getProduct = async (params) => {

  let sql = "";
  if (params.type === "all") {
    sql = `select *  from pesade_product p, pesade_category c 
            where p.category_id = c.category_id
            order  by c.category_name desc`;
  } else if (params.type != "all") {
    sql = `SELECT *
            FROM pesade_product p
            JOIN pesade_category c ON p.category_id = c.category_id
            WHERE c.category_name = ?
            ORDER BY pname DESC `;
  }
  return db.execute(sql, [params.type]).then((result) => result[0]);
};

export const getItem = async (params) => {
  // 제품 정보를 가져오는 쿼리
  const productSql = `
    SELECT pid,
           pname,
           pdetail,
           pscentdetail,
           pdesc,
           FORMAT(pprice,0) AS pprice,
           category_id,
           pinfo,
           pnotice,
           pimage
    FROM pesade_product
    WHERE pid = ?
  `;

  // 제품 이미지 URL을 가져오는 쿼리
  const imagesSql = `
    SELECT img_url as pdetailimage
    FROM pesade_product_image
    WHERE pid = ?
    ORDER BY img_order
  `;

  try {
    // 첫 번째 쿼리 실행 (제품 정보)
    const productResult = await db.execute(productSql, [params]);
    const product = productResult[0][0];

    // 두 번째 쿼리 실행 (제품 이미지 URL)
    const imagesResult = await db.execute(imagesSql, [params]);
    const images = imagesResult[0];

    // 제품 정보와 이미지 URL을 병합
    const productWithImages = {
      ...product,
      pdetailimage: images.map((image) => image.pdetailimage),
    };

    return productWithImages;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};

export const getGift = async (params) => {
  const sql = `select pgid,
                      gift_option
                      from pesade_gift_option`;

  return db.execute(sql, [params]).then((result) => result[0]);
};
