import React from 'react'
import { StepperWrapper, StepperList, StepperItem } from './Stepper.styles'

export const Stepper = ({ steps }) => (
  <StepperWrapper>
    <StepperList>
      {steps.map(({ active, title }) => (
        <StepperItem key={title} active={active}>
          {title}
        </StepperItem>
      ))}
    </StepperList>
  </StepperWrapper>
)
