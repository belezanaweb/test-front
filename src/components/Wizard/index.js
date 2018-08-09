import React from 'react';

/**
 * Styles
 */
import { Steps, Step, WizardInner } from './styles';

const Wizard = () => (
  <Steps>
    <WizardInner>
      <Step>Sacola</Step>
      <Step>Pagamento</Step>
      <Step>Confirmação</Step>
    </WizardInner>
  </Steps>
);

export default Wizard;
