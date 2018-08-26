import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Step from '../components/Step';

const StepList = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const steps = ['sacola', 'pagamento', 'confirmacao']

const StepContainer = ({
  location
}) => (
  <StepList>
    {steps.map(step =>
      <Step
        title={step}
        isActive={location.pathname === `/${step}`
        ? true
        : false } />
    )}
  </StepList>
);

export default withRouter(StepContainer);
