export const fetchCartData = async () => {
  const response = await fetch('http://localhost:5000/api/cart/actual');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const isCartAvailable = (data) => {
  return data && data.length > 0;
};

export const endSale = async (navigate) => {
  try {
    const data = await fetchCartData();
    if (isCartAvailable(data)) {
      navigate('/checkout');
    } else {
      throw new Error('No cart available. Please generate a cart first.');
    }
  } catch (error) {
    throw error;
  }
};
