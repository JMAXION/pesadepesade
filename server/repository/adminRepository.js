import { db } from "../database/database_mysql80.js";

export const deleteProduct = async (pid) => {
  const deleteImagesSql = `DELETE FROM pesade_product_image WHERE pid = ?`;
  const deleteProductSql = `DELETE FROM pesade_product WHERE pid = ?`;

  await db.execute(deleteImagesSql, [pid]);
  await db.execute(deleteProductSql, [pid]);
};
