import React from 'react';

import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <>
      <div className="cart">
        <p className="produtos">PRODUTOS</p>
        <div className="prod-list">
          {products?.length ? (
            products.map((product) => <Product data={product} />)
          ) : (
            <h1>Carrinho vazio.</h1>
          )}
        </div>
      </div>
      <style jsx>{`
        .prod-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          align-self: center;
          background-color: #fff;
          height: 325px;
          border-radius: 3px;
          box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
        }
        .produtos {
          color: #999;
          font-size: 14px;
          font-weight: 700;
          margin: 13px 0px 3px 10px;
        }
      `}</style>
    </>
  );
};

export default ProductList;
