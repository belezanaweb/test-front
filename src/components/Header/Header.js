import React from 'react'

import { Container } from '../Layout'

import * as S from './styles'

const Header = () => (
  <S.Header>
    <Container>
      <S.NavBar>
        <S.Link to="/cart" activeClassName="active">
          SACOLA
        </S.Link>
        <S.Link to="/checkout" activeClassName="active">
          PAGAMENTO
        </S.Link>
        <S.Link to="/confirmation" activeClassName="active">
          CONFIRMAÇÃO
        </S.Link>
      </S.NavBar>
    </Container>
  </S.Header>
)

export default Header
