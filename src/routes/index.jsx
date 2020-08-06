
import React, { Suspense }  from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Components
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";


// Lazy Component
const Cart = React.lazy(() => import('./Cart')) 
const Payment = React.lazy(() => import('./Payment')) 
const OrderPlaced = React.lazy(() => import('./OrderPlaced')) 

export default function Routes() {

  return (
    <Router basename="/checkout">
      <Layout>
        <Suspense fallback={ <Skeleton /> }>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/cart" />} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />
            <Route path="/order-placed" component={  OrderPlaced } />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  )

}