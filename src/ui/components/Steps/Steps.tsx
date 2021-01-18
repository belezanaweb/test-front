import React, { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'

import * as S from './styled'

const Steps: FC = () => {
  return (
    <S.Steps>
      <S.Step isActive={useRouteMatch('/')?.isExact}>Sacola</S.Step>
      <S.Step isActive={useRouteMatch('/payment')?.isExact}>Pagamento</S.Step>
      <S.Step isActive={useRouteMatch('/summary')?.isExact}>Confirmação</S.Step>
    </S.Steps>
  )
}

export default Steps
