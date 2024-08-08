const { getAllProducts } = require('./getAllProducts');

const generateRandomCart = async () => {
  const products = await getAllProducts();
  const cart = [];
  
  const numberOfItems = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5

  for (let i = 0; i < numberOfItems; i++) {
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomIndex];
    const quantity = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

    cart.push({
      product: randomProduct,
      quantity: quantity,
    });
  }

  return cart;
}

module.exports = {
  generateRandomCart,
};
