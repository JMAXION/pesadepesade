import { db } from '../database/database_mysql80.js';

export const deleteProduct = async (req, res) => {
  const { pid } = req.params;

  try {
    // pesade_product_image 테이블에서 해당 pid의 데이터 삭제
    await db.execute('DELETE FROM pesade_product_image WHERE pid = ?', [pid]);

    // pesade_product 테이블에서 해당 pid의 데이터 삭제
    await db.execute('DELETE FROM pesade_product WHERE pid = ?', [pid]);

    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Database error' });
  }
};
