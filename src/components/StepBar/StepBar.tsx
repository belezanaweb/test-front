import React, { FC } from 'react'

import { IStepBar } from './interface'
import * as S from './StepBar.styled'

export const StepBar: FC<IStepBar> = ({ steps }) => {
  return (
    <S.StepBar>
      {steps.map((step, index) => {
        return (
          <S.Step key={`step-${index}`} isActive={step.isActive}>
            {step.name}
          </S.Step>
        )
      })}
    </S.StepBar>
  )
}
