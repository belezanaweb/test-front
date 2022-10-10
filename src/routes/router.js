import Fallback from 'components/Fallback';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

const Cart = lazy(() =>
  Promise.all([import('./Cart'), new Promise((resolve) => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports
  )
);
const Payment = lazy(() =>
  Promise.all([import('./Payment'), new Promise((resolve) => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports
  )
);
const Confirmation = lazy(() =>
  Promise.all([import('./Confirmation'), new Promise((resolve) => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports
  )
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <>404 not found</>,
    children: [
      {
        path: '/sacola',
        element: (
          <Suspense fallback={<Fallback />}>
            <Cart />
          </Suspense>
        )
      },
      {
        path: '/pagamento',
        element: (
          <Suspense fallback={<Fallback />}>
            <Payment />
          </Suspense>
        )
      },
      {
        path: '/confirmacao',
        element: (
          <Suspense fallback={<Fallback />}>
            <Confirmation />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;
