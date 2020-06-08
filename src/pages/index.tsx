import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

function Pages() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Redirect exact path="/" to="/cart" />
        <Route exact path="/cart" component={lazy(() => import('./cart'))} />
        <Route exact path="/payment" component={lazy(() => import('./payment'))} />
        <Route exact path="/success" component={lazy(() => import('./success'))} />
      </Switch>
    </Suspense>
  );
}

export default Pages;
