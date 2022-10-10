import { CartProvider } from 'context/CartContext';
import { RouterProvider } from 'react-router-dom';

import router from './routes/router';
import useAppStyles from './styles/useAppStyles';

const App = () => {
  useAppStyles();

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
