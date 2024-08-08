const { findProductById } = require('./findProductById');
const { calculateRealStock } = require('./calculateRealStock');

const checkoutService = async (cart) => {
  var canBeRecieved = true;
  console.log("__________________________________________________________");
  for (const product of cart) {
    const productFound = await findProductById(product.id);
    const name = productFound.title;
    const stock = productFound.stock;
    const rating = productFound.rating;
    const realStock = await calculateRealStock(stock, rating);

    console.log("Name: " + name);
    console.log("Price: $" + productFound.price);
    console.log("Discount: " + productFound.discountPercentage + "%");
    console.log("Quantity: " + product.quantity);
    console.log("Stock: " + stock);
    console.log("Rating: " + rating);
    console.log("Real Stock: " + realStock);
    console.log("\n");

    if (realStock < product.quantity) {
      canBeRecieved = false;
      break;
    }
  }

  console.log("Can be recieved: " + canBeRecieved);

  return canBeRecieved;
};

module.exports = { checkoutService };
