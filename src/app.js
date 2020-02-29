import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { CheckoutCart, CheckoutPayment, CheckoutConfirmation } from './pages';

const PAGES = [
  {
    title: 'Sacola',
    path: '/',
    page: CheckoutCart
  },
  {
    title: 'Pagamento',
    path: '/pagamento',
    page: CheckoutPayment
  },
  {
    title: 'Confirmação',
    path: '/confirmacao',
    page: CheckoutConfirmation
  }
];

function App() {
  return (
    <Router>
      <ul>
        {PAGES.map(({ title, path }) => (
          <li key={title}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {PAGES.map(({ title, path, page: Page }) => (
          <Route key={title} path={path} exact={path === '/'}>
            <Page></Page>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
