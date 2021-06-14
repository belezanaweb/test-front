import React from 'react'
import PropTypes from 'prop-types'

import { useCart } from '../../hooks/useCart'
import Header from '../Header'
import Loading from '../Loading'

import * as S from './styles'

const Layout = ({ children }) => {
  const { id } = useCart()

  const isLoading = !id

  return (
    <S.Layout>
      <Header />
      {<S.Container as="main">{isLoading ? <Loading /> : children}</S.Container>}
    </S.Layout>
  )
}
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Layout
