const { findProductById } = require('../services/findProductById');
const { getAllProducts } = require('../services/getAllProducts');

const cartController = {
  getAllProducts: async (req, res, next) => {
    try {
      const products = await getAllProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
  },
  
  findProductById: async (req, res, next) => {
    try {
      const { productId } = req.params;
      const product = await findProductById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      next(error);
    }
  },

};

module.exports = cartController;
