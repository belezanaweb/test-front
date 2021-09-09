import React from 'react'

import { styled } from '@/style/stitches.config'

const StepStyled = styled('span', {
  fontSize: 13,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  variants: {
    color: {
      active: {
        color: '$orange100'
      },
      inactive: {
        color: '$gray200'
      }
    }
  }
})

interface OwnProps {
  name: String
  slug: 'sacola' | 'pagamento' | 'confirmacao'
}

const Step = (props: OwnProps): React.ReactElement => {
  const { name } = props

  return <StepStyled color="inactive">{name}</StepStyled>
}

export default Step
