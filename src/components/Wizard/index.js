import React from 'react';

/**
 * Styles
 */
import { Steps, Step } from './styles';

const Wizard = () => (
  <Steps>
    <Step>Sacola</Step>
    <Step>Pagamento</Step>
    <Step>Confirmação</Step>
  </Steps>
);

export default Wizard;
