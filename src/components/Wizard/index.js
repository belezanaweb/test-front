import React from 'react';

/**
 * Styles
 */
import { Steps, Step, WizardInner } from './styles';

const Wizard = props => (
  <Steps>
    <WizardInner>
      <Step current={props.current === 1}>Sacola</Step>
      <Step current={props.current === 2}>Pagamento</Step>
      <Step current={props.current === 3}>Confirmação</Step>
    </WizardInner>
  </Steps>
);

export default Wizard;
