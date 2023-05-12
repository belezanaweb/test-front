import Router from './routes/Routes';
import { Container } from './App.styled';
import { CartProvider } from './context/cart.context';

const App = (): JSX.Element => {
  return (
    <Container>
      <CartProvider>
        <Router />
      </CartProvider>
    </Container>
  );
}

export default App;
