import { useNavigate } from 'react-router-dom';
import '../style/Landing.css';

function Landing() {
  const navigate = useNavigate();

  const handleGenerateCartButton = () => {
    navigate('/checkout');
  };

  const handleEndSaleButton = () => {

  };

  return (
    <div className="Landing">
      <h1>Flapp Ecommerce</h1>
      <button onClick={handleGenerateCartButton} type='button' class="btn btn-primary">Generar Carrito</button>
      <button onClick={handleEndSaleButton} type='button' class="btn btn-primary">Finalizar Compra</button>
    </div>
  );
}

export default Landing;
