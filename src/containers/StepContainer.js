import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Step from '../components/Step';

const StepList = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  box-shadow: var(--box-shadow-1);
`

const steps = ['sacola', 'pagamento', 'confirmacao']

const StepContainer = ({
  location
}) => (
  <StepList>
    {steps.map(step =>
      <Step
        key={step}
        title={step}
        isActive={location.pathname === `/${step}`
        ? true
        : false } />
    )}
  </StepList>
);

export default withRouter(StepContainer);
