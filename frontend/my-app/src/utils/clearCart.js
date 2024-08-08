export const clearCart = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/actual', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error clearing the cart: ${error.message}`);
    }
  };
  