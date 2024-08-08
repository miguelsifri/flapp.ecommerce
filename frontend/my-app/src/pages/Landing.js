import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Landing.css';
import { generateCart } from '../utils/generateCart';
import { endSale } from '../utils/endSale';

function Landing() {
  const navigate = useNavigate();
  const [generatingCart, setGeneratingCart] = useState(false);
  const [endingSale, setEndingSale] = useState(false);

  const handleGenerateCartButton = async () => {
    setGeneratingCart(true);
    try {
      await generateCart();
      navigate('/checkout');
    } catch (error) {
      console.error('Error generating or saving the cart:', error);
      alert('Error generating or saving the cart. Please try again.');
    } finally {
      setGeneratingCart(false);
    }
  };

  const handleEndSaleButton = async () => {
    setEndingSale(true);
    try {
      await endSale(navigate);
    } catch (error) {
      console.error('Error checking the cart. Please try again.', error);
      alert(error.message);
    } finally {
      setEndingSale(false);
    }
  };

  return (
    <div className="Landing">
      <h1>Flapp Ecommerce</h1>
      <button 
        onClick={handleGenerateCartButton}
        type='button' 
        className="btn btn-primary" 
        disabled={endingSale || generatingCart}
      >
        {generatingCart ? 'Generando Carro...' : 'Generar Carrito'}
      </button>
      <button 
        onClick={handleEndSaleButton}
        type='button' 
        className="btn btn-primary"
        disabled={endingSale || generatingCart}
      >
        {endingSale ? 'Finalizando Venta...' : 'Finalizar Venta'}
      </button>
    </div>
  );
}

export default Landing;
