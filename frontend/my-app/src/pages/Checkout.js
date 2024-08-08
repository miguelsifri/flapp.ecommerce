import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Checkout.css';
import CartTable from '../components/CartTable';
import { clearCart } from '../utils/clearCart';
import { fetchCartData } from '../utils/getCart';
import { quoteDelivery } from '../utils/quoteDelivery';


function Checkout() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCartData = async () => {
      setLoading(true);
      try {
        const data = await fetchCartData();
        setProducts(data);
      } catch (error) {
        console.error('Error getting the cart:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCartData();
  }, []);

  const handleQuoteButton = async () => {
    setLoading(true);
    try {
      const data = await quoteDelivery(products);
      setLoading(false);
      
      if (data.canBeRecieved) {
        alert('Envío Flapp ⚡- $3670');
      }
      else {
        alert('No hay envíos disponibles');
      };
    }
    catch (error) {
      console.error('Error cotizando el despacho:', error);
      alert('Error cotizando el despacho. Por favor, intente nuevamente.');
      setLoading(false);
    }
  };

  const handleReturnButton = () => {
    navigate('/');
  }

  const handleClearCartButton = async () => {
    try {
      await clearCart();
      navigate('/');
    } catch (error) {
      console.error('Error clearing the cart:', error);
      alert('Error clearing the cart. Please try again.');
    }
  };

  return (
    <div className="Checkout">
      <h1>Flapp Checkout</h1>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <CartTable products={products} />
      )}
      <button
        onClick={handleQuoteButton}
        type='button' 
        className="btn btn-primary"
        disabled={loading}
      >
        Cotizar Despacho
      </button>

      <button 
        onClick={handleClearCartButton}
        type='button' 
        className="btn btn-primary"
        disabled={loading}
      >
        Limpiar Carrito
      </button>

      <button 
        onClick={handleReturnButton} 
        type='button' 
        className="btn btn-primary"
        disabled={loading}
      >
        Volver
      </button>
    </div>
  );
}

export default Checkout;
