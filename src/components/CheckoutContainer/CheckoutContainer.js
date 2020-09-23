import React, { useEffect } from 'react';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Menu from '../Menu';
import Skeleton from '~/components/Skeleton';

import { getCart } from '~/store/ducks/cart/actions';

import { Container } from './styles';

const CheckoutContainer = ({ pages, location: { pathname } }) => {
  const showLoader = useSelector((state) => state.loader.show);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <>
      {showLoader && <Skeleton />}
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

export default withRouter(CheckoutContainer);
