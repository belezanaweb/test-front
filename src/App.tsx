import Checkout from './components/Checkout/index';
import './App.css'
import CartProvider from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Checkout />
    </CartProvider>
  )
}
