import React from 'react';
import Button from './Button';
import Produto from './Produto';
import Summary from './Summary';

const Sacola = () => {
  return (
    <div>
      <h3>Produtos</h3>
      <Produto />
      <Summary />
      <div style={{ textAlign: 'center' }}>
        <Button place="/pagamento" texto="Seguir para o pagamento" />
      </div>
    </div>
  );
};

export default Sacola;
