import React from 'react'

import { styled } from '@/style/stitches.config'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IStep } from '@/types/Step'
import { useStep } from '@/contexts/step'

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

const Step = (props: IStep): React.ReactElement => {
  const { name, pathname } = props

  const { stepPathnameActive } = useStep()

  return (
    <StepStyled color={pathname === stepPathnameActive ? 'active' : 'inactive'}>{name}</StepStyled>
  )
}

export default Step
