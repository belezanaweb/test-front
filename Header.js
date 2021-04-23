import React, { useEffect, useState } from 'react';

import Cart from './Cart';
import Payment from './Payment';
import Success from './Success';
import NotFound from './NotFound';

import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

const Header = () => {
  const [items, setItems] = useState([]);
  const [step, setStep] = useState('cart');
  const [isLoading, setIsLoading] = useState(true);

  const checkActive = (name) => {
    if (name === step) {
      return 'header-active';
    }
    return 'header-inactive';
  };

  useEffect(() => {
    fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <>
        <div className="test">
          <p className={checkActive('cart')} to="/cart">
            SACOLA
          </p>
          <p className={checkActive('pay')} to="/pay">
            PAGAMENTO
          </p>
          <p className={checkActive('success')} to="/success">
            CONFIRMAÇÃO
          </p>
        </div>
        <div className="content">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Switch>
              <Route path="/cart">
                <Cart products={items} updateHeader={() => setStep('cart')} />
              </Route>
              <Route path="/pay">
                <Payment updateHeader={() => setStep('pay')} />
              </Route>
              <Route path="/success">
                <Success />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          )}
        </div>

        <style jsx="true">{`
          .test {
            display: flex;
            flex-direction: row;
            background-color: #fff;
            justify-content: space-around;
            box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
            height: 40px;
            width: '100%';
          }
          .content {
            margin: 0px 2.5% 0px 2.5%;
          }
          .header-active,
          .header-inactive {
            font-size: 13px;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0.01em;
            text-align: center;
            text-decoration: none;
            margin: 13px 0 13px 0;
          }
          .header-active {
            color: #ff7800;
          }
          .header-inactive {
            color: #ccc;
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

export default Header;
