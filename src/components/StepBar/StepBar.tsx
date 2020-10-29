import React, { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'

import * as S from './StepBar.styled'

export const StepBar: FC = () => {
  return (
    <S.StepBar>
      <S.Step isActive={useRouteMatch('/')?.isExact}>Sacola</S.Step>
      <S.Step isActive={useRouteMatch('/pagamento')?.isExact}>Pagamento</S.Step>
      <S.Step isActive={useRouteMatch('/sucesso')?.isExact}>Confirmação</S.Step>
    </S.StepBar>
  )
}
