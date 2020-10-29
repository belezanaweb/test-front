import React, { FC } from 'react'

import * as S from './Header.styled'
import StepBar from '../StepBar'

export const Header: FC = () => {
  return (
    <S.Header>
      <StepBar />
    </S.Header>
  )
}
