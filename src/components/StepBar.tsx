import React from 'react'

import { styled } from '@/style/stitches.config'
import Step from './Step'

const StepBarStyled = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  paddingY: '12px',
  paddingX: '20px',
  boxShadow: '1px 1px 5px $defaultShadow'
})

const StepBar = (): React.ReactElement => {
  return (
    <StepBarStyled>
      <Step name="Sacola" slug="sacola" />
      <Step name="Pagamento" slug="pagamento" />
      <Step name="Confirmação" slug="confirmacao" />
    </StepBarStyled>
  )
}

export default StepBar
