import React, { useState, useEffect } from 'react';

const Total = () => {
  const [total, setTotal] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const data = await localStorage.getItem('belezanawebCartProducts');
    const { items, ...info } = JSON.parse(data);
    setTotal(info);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  let format = (value) => {
    return value.toFixed(2).replace('.', ',');
  };

  return (
    <>
      {loading ? (
        'Carregando'
      ) : (
        <div className="total-container">
          <div className="total-produtos">
            <div className="keys">PRODUTOS</div>
            <div className="values">R$ {format(total.subTotal)}</div>
          </div>
          <div className="total-frete">
            <div className="keys">FRETE</div>
            <div className="values">R$ {format(total.shippingTotal)}</div>
          </div>
          <div className="total-desconto">
            <div className="keys">DESCONTO</div>
            <div className="values">- R$ {format(total.discount)}</div>
          </div>
          <div className="total">
            <div className="keys">TOTAL</div>
            <div className="values">R$ {format(total.total)}</div>
          </div>
        </div>
      )}
      <style jsx="true">{`
        .total-container {
          box-sizing: border-box;
          border-radius: 3px;
          border: 1px solid #ccc;
          margin: 20px 0 20px 0;
          padding: 15px 15px 13px 15px;
          width: 100%;
        }
        .total-produtos,
        .total-frete,
        .total-desconto,
        .total {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          margin: 0 0 9px 0;
          padding: 0;
          font-size: 14px;
        }
        .total-desconto {
          color: #ff7800;
        }
        .total {
          margin: 16px 0 0 0;
          font-weight: 700;
          color: #212122;
        }
      `}</style>
    </>
  );
};

export default Total;
