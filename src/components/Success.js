import React, { useEffect, useState } from 'react';
import { IoIosCheckmarkCircleOutline as CheckMark } from 'react-icons/io';
import { Redirect } from 'react-router-dom';

import ProductList from './ProductList';
import Total from './Total';
import NavBar from './NavBar';
import Container from './Container';

const Success = () => {
  const [payInfo, setPayInfo] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('belezanawebPayment');
    if (data !== null) {
      const info = JSON.parse(data);
      setPayInfo(info);
      localStorage.removeItem('belezanawebPayment');
      localStorage.removeItem('belezanawebCartProducts');
    } else {
      setRedirect(true);
    }
  }, []);
  return (
    <>
      <NavBar active="success" />
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <div className="content">
          <div className="toast-success">
            <CheckMark size="50" color="#ff7800" />
            <h2>COMPRA EFETUADA COM SUCESSO</h2>
          </div>
          <Container title="pagamento">
            <div className="pay-info">
              <span>{payInfo.card}</span>
              <span>{payInfo.owner}</span>
              <span>{payInfo.expiration}</span>
            </div>
          </Container>
          <ProductList showPrice={false} />
          <Total />
        </div>
      )}
      <style jsx="true">{`
        .toast-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 8px;
        }
        .pay-info {
          align-self: flex-start;
          margin: 15px 0 0 10px;
          display: flex;
          flex-direction: column;
          align-content: flex-start;
          font-size: 14px;
          line-height: 17px;
        }
        h2 {
          color: #ff7800;
          font-size: 14px;
          font-weight: 700;
          line-height: 17px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Success;
