const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

let actualCart = null;

router.get('/products', cartController.getAllProducts);
router.get('/products/:productId', cartController.findProductById);
router.get('/random', cartController.generateRandomCart);
router.post('/actual', (req, res) => {
    actualCart = req.body;
    res.status(200).send({ message: 'Cart saved successfully!' });
})
router.get('/actual', (req, res) => {
    res.json(actualCart);
})
router.delete('/actual', (req, res) => {
    actualCart = null;
    res.status(200).send({ message: 'Cart cleared successfully!' });
})

router.post('/', cartController.checkout);

module.exports = router;