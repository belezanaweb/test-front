import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Menu, SkeletonPage } from './components';

const PAGES = [
  {
    title: 'Sacola',
    path: '/',
    page: Loadable({
      loader: () => import(/* webpackChunkName: 'checkout-cart' */ './pages/checkout-cart'),
      loading: SkeletonPage
    })
  },
  {
    title: 'Pagamento',
    path: '/pagamento',
    page: Loadable({
      loader: () => import(/* webpackChunkName: 'checkout-payment' */ './pages/checkout-payment'),
      loading: SkeletonPage
    })
  },
  {
    title: 'Confirmação',
    path: '/confirmacao',
    page: Loadable({
      loader: () =>
        import(/* webpackChunkName: 'checkout-confirmation' */ './pages/checkout-confirmation'),
      loading: SkeletonPage
    })
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
          <Route key={title} path={path} exact={path === '/'} component={Page} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
