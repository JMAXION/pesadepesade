import * as repository from '../repository/deleteRepository.js';

export const deleteProduct = async (req, res) => {
  const pid = req.params.pid;

  try {
    await repository.deleteProduct(pid);
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Failed to delete product' });
  }
};
