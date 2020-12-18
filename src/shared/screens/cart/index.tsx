import * as React from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { AppState } from '../../store';
import { actions } from '../../store/carts/action';

interface CartsPageProps {
  route?: RouteConfig;
}

function CartsPage({ route }: CartsPageProps) {
  return (
    <>
      {renderRoutes(route?.routes)}
    </>
  );
}

(CartsPage as Container<CartsPageProps>).preload = async ({ store }) => {
  if (!store.getState().carts.carts.data) {
    store.dispatch(actions.loadCartsRequest());
  }
};

export default CartsPage;
