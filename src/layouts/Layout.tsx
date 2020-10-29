import React, { FC } from 'react'
import Header from '../components/Header'

import * as S from './Layout.styled'
export const Layout: FC = (props) => {
  return (
    <>
      <Header />
      <S.Layout>{props.children}</S.Layout>
    </>
  )
}
