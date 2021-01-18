import React, { FC } from 'react'
import Header from '../../components/Header'

import * as S from './styled'

const Checkout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
    </>
  )
}

export default Checkout
