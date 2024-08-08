const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/products', cartController.getAllProducts);
router.get('/products/:productId', cartController.findProductById);
router.get('/random', cartController.generateRandomCart);

module.exports = router;