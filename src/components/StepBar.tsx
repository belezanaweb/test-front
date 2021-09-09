import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { styled } from '@/style/stitches.config'
import Step from './Step'

import { StepPathname } from '@/types/Step'
import { useStep } from '@/contexts/step'

const StepBarStyled = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  paddingY: '12px',
  paddingX: '20px',
  boxShadow: '1px 1px 5px $defaultShadow'
})

const StepBar = (): React.ReactElement => {
  const location = useLocation()
  const { stepPathnameActive, setStepPathnameActive } = useStep()

  useEffect(() => {
    if (location.pathname !== stepPathnameActive) {
      setStepPathnameActive(location.pathname as StepPathname)
    }
  })

  return (
    <StepBarStyled>
      <Step name="Sacola" pathname={StepPathname.Sacola} />
      <Step name="Pagamento" pathname={StepPathname.Pagamento} />
      <Step name="Confirmação" pathname={StepPathname.Confirmacao} />
    </StepBarStyled>
  )
}

export default StepBar
