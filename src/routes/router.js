import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <>404 not found</>,
    children: [
      {
        path: '/sacola',
        element: <>Sacola de produtos</>
      },
      {
        path: '/pagamento',
        element: <>Pagamento</>
      },
      {
        path: '/confirmacao',
        element: <>Compra confirmada</>
      }
    ]
  }
]);

export default router;
