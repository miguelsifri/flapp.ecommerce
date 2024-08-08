import { useNavigate } from 'react-router-dom';
import '../style/Checkout.css';
import CartTable from '../components/CartTable';

function Checkout() {
  const navigate = useNavigate();

  const handleReturnButton = () => {
    navigate('/');
  }

  return (
    <div className="Checkout">
      <h1>Flapp Checkout</h1>
      <CartTable />
      <button type='button' class="btn btn-primary">Cotizar Despacho</button>
      <button type='button' class="btn btn-primary">Limpiar Carrito</button>
      <button onClick={handleReturnButton} type='button' class="btn btn-primary">Volver</button>
    </div>
  );
}

export default Checkout;
