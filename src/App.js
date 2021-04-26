import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './components/Cart';
import Payment from './components/Payment';
import Success from './components/Success';
import NotFound from './components/NotFound';

const App = () => {
  const fetchAndStore = () => {
    fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('belezanawebCartProducts', JSON.stringify(data));
      });
  };

  useEffect(() => {
    //localStorage.removeItem('belezanawebCartProducts');
    if (localStorage.getItem('belezanawebCartProducts') === null) {
      fetchAndStore();
    }
  }, []);

  return (
    <BrowserRouter>
      <>
        <div className="display">
          <Switch>
            <Route exact path="/">
              <Cart />
            </Route>
            <Route path="/pay">
              <Payment />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>

        <style jsx="true">{`
          .display {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 700px;
            margin: 0px 2.5% 0px 2.5%;i
          }
          body {
            background-color: #eee;
            font-family: Helvetica !important;
          }
        `}</style>
      </>
    </BrowserRouter>
  );
};

export default App;
