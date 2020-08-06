
import React, { Suspense }  from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Components
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";

// Context Api
import { useOrder } from "../context/OrderContext";
import { usePayment } from "../context/PaymentProvider";

// Lazy Component
const Cart = React.lazy(() => import('./Cart')) 
const Payment = React.lazy(() => import('./Payment')) 
const OrderPlaced = React.lazy(() => import('./OrderPlaced')) 

export default function Routes() {
  const { loading } = useOrder();
  const { paymentData } = usePayment();
  
  return (
    <Router basename="/checkout">
      <Layout>
        <Suspense fallback={
          loading && <Skeleton />
        }>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/cart" />} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />
            <Route path="/order-placed" component={ () => !paymentData.empty ? <OrderPlaced /> : <Redirect to="/payment" /> } />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  )

}