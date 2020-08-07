
import React, { Suspense }  from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
import Layout from "../components/Layout";

// Context Api
import { usePayment } from "../context/PaymentProvider";

// Lazy Component
const Cart = React.lazy(() => import('./Cart')) 
const Payment = React.lazy(() => import('./Payment')) 
const OrderPlaced = React.lazy(() => import('./OrderPlaced'))

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
))

export default function Routes() {
  
  const { paymentData } = usePayment(); 
  
  return (
    <Router basename="/checkout">
      <Layout>
        <Suspense fallback={ <div> Carregando </div>}>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/cart" />} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />
            <Route path="/order-placed" component={ () => !paymentData.empty ? <OrderPlaced /> : <Redirect to="/payment" /> } />
          </Switch>
        </Suspense>
        <LocationDisplay />
      </Layout>
    </Router>
  )

}