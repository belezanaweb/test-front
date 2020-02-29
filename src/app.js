import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import { CheckoutCart, CheckoutPayment, CheckoutConfirmation } from './pages';
import { Menu } from './components';

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
      <Menu>
        {PAGES.map(({ title, path }) => (
          <NavLink to={path} key={title} exact={path === '/'}>
            {title}
          </NavLink>
        ))}
      </Menu>

      <Switch>
        {PAGES.map(({ title, path, page: Page }) => (
          <Route key={title} path={path} exact={path === '/'}>
            <Page />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
