import { createBrowserRouter } from 'react-router-dom';
import Cart from './Cart';
import Payment from './Payment';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <>404 not found</>,
    children: [
      {
        path: '/sacola',
        element: <Cart />
      },
      {
        path: '/pagamento',
        element: <Payment />
      },
      {
        path: '/confirmacao',
        element: <>Compra confirmada</>
      }
    ]
  }
]);

export default router;
