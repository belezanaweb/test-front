import React from 'react';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom';

import Menu from '../menu';
import Container from '../container';

const Layout = function({ pages, location: { pathname } }) {
  return (
    <>
      <Menu>
        {pages.map(({ title, path, disabled }) =>
          disabled ? (
            <span key={path} className={pathname === path ? 'active' : ''}>
              {title}
            </span>
          ) : (
            <NavLink exact key={path} to={path}>
              {title}
            </NavLink>
          )
        )}
      </Menu>
      <Switch>
        <Container>
          {pages.map(({ title, path, page: Page }) => (
            <Route key={title} exact path={path} component={Page} />
          ))}
        </Container>

        <Redirect from="*" exact to="/checkout/cart" />
      </Switch>
    </>
  );
};

export default withRouter(Layout);
