import React, { Fragment, Suspense, useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import routes from "./routes";
import { Menu, Context } from "./components";
import { RootCSS } from "./styles";
import { GetPurchase } from "./api";

function App(props) {
  const { Provider, Consumer } = Context;
  const { Loading, NotFound } = RootCSS;
  const [ purchase, setPurchase ] = useState({});

  useEffect(() => {
    GetPurchase().then(({ data }) => setPurchase({
      products: data.items,
      info: {
        subTotal: data.subTotal,
        shippingTotal: data.shippingTotal,
        discount: data.discount,
        total: data.total
      }
    }));
    return () => {
      setPurchase({});
    }
  }, []);

  return (
    <Fragment>
      <Menu />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/cart" />} />
          <Provider value={ purchase }>
            <Consumer>
            {
              purchase =>
                routes.map((route) => (
                  <Route
                    key={route.id}
                    path={route.path}
                    exact={route.exact}
                    component={() => <route.component purchase={purchase} {...props} />}
                  />
                ))
            }
            </Consumer>
          </Provider>
          <Route>
            <NotFound>Não encontrado</NotFound>
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default withRouter(App);
