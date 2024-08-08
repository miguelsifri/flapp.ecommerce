import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  // const [cart, setCart] = useState(null);
  // const navigate = useNavigate();

  // const generateCart = async () => {
  //   try {
  //     const response = await axios.get('https://dummyjson.com/carts/1');
  //     console.log('Cart generated:', response.data.products);
  //     setCart(response.data.products);
  //   } catch (error) {
  //     console.error('Error generating cart:', error);
  //   }
  // };

  // const goToCheckout = () => {
  //   if (cart) {
  //     navigate('/checkout', { state: { cart } });
  //   }
  // };

  return (
    <div className="App">
      <h1>Flapp Ecommerce</h1>
      <button>Generar Carrito</button>
      <button>Finalizar Compra</button>
      {/* <button onClick={generateCart}>Generar carrito</button>
      <button onClick={goToCheckout} disabled={!cart}>Finalizar compra</button> */}
    </div>
  );
}

export default App;
