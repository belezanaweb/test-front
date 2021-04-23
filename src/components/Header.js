import React, { useEffect, useState } from 'react';

import Cart from './Cart';
import Payment from './Payment';
import Success from './Success';
import NotFound from './NotFound';

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const Header = () => {
  const [items, setItems] = useState([]);
  const [step, setStep] = useState('cart');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <>
        <div class="test">
          <Link class="header" to="/cart">
            SACOLA
          </Link>
          <Link class="header" to="/about">
            PAGAMENTO
          </Link>
          <Link class="header" to="/dashboard">
            CONFIRMAÇÃO
          </Link>
        </div>
        <div class="content">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Switch>
              <Route path="/cart">
                <Cart products={items} />
              </Route>
              <Route path="/about">
                <Payment />
              </Route>
              <Route path="/dashboard">
                <Success />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          )}
        </div>

        <style jsx>{`
          .test {
            display: flex;
            flex-direction: row;
            background-color: #fff;
            justify-content: space-around;
            box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
            align-items: center;
            height: 40px;
            width: '100%';
          }
          .content {
            margin: 0px 2.5% 0px 2.5%;
          }
          .header {
            color: #ff7800;
            font-size: 13px;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0.01em;
            text-align: center;
            text-decoration: none;
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
