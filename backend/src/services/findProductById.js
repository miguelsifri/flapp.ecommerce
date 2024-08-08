const axios = require('axios');
const { getAllProducts } = require('./getAllProducts');

const findProductById = async (productId) => {
  const products = await getAllProducts();
  return products.find(product => product.id === parseInt(productId));
}

module.exports = {
    findProductById,
};
