const { findProductById } = require('../services/findProductById');
const { getAllProducts } = require('../services/getAllProducts');
const { generateRandomCart } = require('../services/generateRandomCart');
const { calculateRealStock } = require('../services/calculateRealStock');
const { checkoutService } = require('../services/checkoutService');

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

  generateRandomCart: async (req, res, next) => {
    try {
      const cart = await generateRandomCart();
      res.json(cart);
    } catch (error) {
      next(error);
    }
  },

  checkout: async (req, res, next) => {
    try {
      const { cart } = req.body;
      const canBeRecieved = await checkoutService(cart);
      res.json({ canBeRecieved});
    }
    catch (error) {
      next(error);
    }
  },

};

module.exports = cartController;
