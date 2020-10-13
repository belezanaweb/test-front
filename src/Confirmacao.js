import React from 'react';
import ResumoPagamento from './ResumoPagamento';
import Summary from './Summary';

const Confirmacao = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <p className="sucess">Compra efetuada com sucesso</p>
      </div>
      <h3>Pagamento</h3>
      <ResumoPagamento />
      <h3>Produtos</h3>

      <Summary />
    </div>
  );
};

export default Confirmacao;
