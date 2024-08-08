const API_URL = 'http://localhost:5000/api/cart/actual';

export const fetchCartData = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };