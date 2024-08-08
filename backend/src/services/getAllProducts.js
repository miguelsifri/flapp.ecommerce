const axios = require('axios');
const API_URL = 'https://dummyjson.com/products';

const getAllProducts = async () => {
  let products = [];
  let hasMore = true;
  let skip = 0;
  const limit = 10;

  while (hasMore) {
    const response = await axios.get(`${API_URL}?skip=${skip}&limit=${limit}`);
    products = products.concat(response.data.products);
    hasMore = response.data.total > products.length;
    skip += limit;
  }

  return products;
};

module.exports = {
  getAllProducts,
};