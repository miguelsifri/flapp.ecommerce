const calculateRealStock = async (stock, rating) => {
    return Math.floor(stock / rating);
};

module.exports = {
    calculateRealStock,
};