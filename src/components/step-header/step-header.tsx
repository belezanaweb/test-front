import * as React from 'react';
import StepItem from '../step-item/step-item';
import styled from 'styled-components';

const StepWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  padding: 0 10px;

  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`;

const StepHeader: React.FC<{
  steps: any[],
  stepActive: string
}> = ({ steps, stepActive }) => (
  <StepWrapper>
    {steps.map(step => <StepItem key={step.path} label={step.label} active={stepActive === step.path} />)}
  </StepWrapper>
);

export default StepHeader;
