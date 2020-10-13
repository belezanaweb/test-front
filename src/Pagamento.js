import React from 'react';
import Form from './Form';
import Summary from './Summary';

const Pagamento = () => {
  return (
    <div>
      <h3>Pagamento</h3>
      <Form />
      <Summary />

      <div style={{ textAlign: 'center' }}>
        <button type="submit" form="form-cartao">
          FINALIZAR PEDIDO
        </button>
        {/* <Button texto="Finalizar Pedido" place="/confirmacao" /> */}
      </div>
    </div>
  );
};

export default Pagamento;
