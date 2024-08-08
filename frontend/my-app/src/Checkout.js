import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  console.log('Cart in checkout:', cart);

  const quoteShipping = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart', cart);
      alert(response.data.canProcessOrder ? 'Envío Nomad ⚡ - $3670' : 'No hay envíos disponibles :(');
    } catch (error) {
      console.error('Error quoting shipping:', error);
    }
  };

  return (
    <div className="Checkout">
      <h1>Checkout</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={quoteShipping}>Cotizar despacho</button>
      <button onClick={() => navigate('/')}>Volver</button>
      <button onClick={() => navigate('/', { replace: true })}>Limpiar carrito</button>
    </div>
  );
}

export default Checkout;
