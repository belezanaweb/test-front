import React from 'react'
import styled from 'styled-components'

import Alert from '../components/Alert'
import Products from '../containers/Products'
import Payment from '../containers/Payment'

import Total from '../containers/Total'

const Container = styled.div`
  display: grid;
  gap: 20px;
  padding: 10px;
`

const App = () => (
  <Container>
    <Alert>
      <img alt="check" src="img/icon/check.png" />
      <div>COMPRA EFETUADA COM SUCESSO</div>
    </Alert>
    <Payment />
    <Products condensed />
    <Total />
  </Container>
)

export default App
