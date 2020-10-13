import React from 'react';

const Summary = () => {
  const dados = JSON.parse(localStorage.getItem('dados'));

  return (
    <div className="sum">
      <p>Produtos: R$ {('' + dados.subTotal.toFixed(2)).replace('.', ',')}</p>
      <p>Frete: R$ {('' + dados.shippingTotal.toFixed(2)).replace('.', ',')}</p>
      <p className="disc">
        Desconto: - R$ {('' + dados.discount.toFixed(2)).replace('.', ',')}
      </p>
      <p className="bold">
        Total: R${' '}
        {(
          '' +
          (dados.subTotal + dados.shippingTotal - dados.discount).toFixed(2)
        ).replace('.', ',')}
      </p>
    </div>
  );
};

export default Summary;
