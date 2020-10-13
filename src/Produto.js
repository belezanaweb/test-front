import React from 'react';

const Produto = () => {
  const dados = JSON.parse(localStorage.getItem('dados'));
  return (
    <>
      <div className="cont">
        <ul className="product">
          {dados.items.map((item, index) => (
            <li id={item.product.sku} key={index} className="product">
              <img
                src={item.product.imageObjects[0].thumbnail}
                alt={item.product.sku}
              />
              <p>{item.product.name}</p>
              <p className="bold">
                {' '}
                R${' '}
                {(
                  '' + item.product.priceSpecification.price.toFixed(2)
                ).replace('.', ',')}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Produto;
