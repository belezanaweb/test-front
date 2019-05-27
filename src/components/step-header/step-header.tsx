import * as React from 'react';
import StepItem from '../step-item/step-item';

const StepHeader: React.FC<{
  steps: string[],
  stepActive: string
}> = ({ steps, stepActive }) => (
  <React.Fragment>
    {steps.map(step => <StepItem key={step} label={step} active={stepActive === step} />)}
  </React.Fragment>
)

export default StepHeader;
