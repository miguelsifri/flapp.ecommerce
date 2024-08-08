export const quoteDelivery = async (products) => {
    const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: products }),
      });

    if (!response.ok) {
    throw new Error('Network response was not ok');
    }

    return await response.json();
};