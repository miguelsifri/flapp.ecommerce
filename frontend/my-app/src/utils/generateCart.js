const API_BASE_URL = 'http://localhost:5000/api/cart';

const fetchRandomCart = async () => {
  const response = await fetch(`${API_BASE_URL}/random`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const saveCart = async (cartData) => {
  const response = await fetch(`${API_BASE_URL}/actual`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const generateCart = async () => {
  const cartData = await fetchRandomCart();
  return saveCart(cartData);
};