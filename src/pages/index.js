import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import Products from '../containers/Products'
import Total from '../containers/Total'

const Content = styled.div`
  display: grid;
  gap: 20px;
  padding: 10px;
`

const App = () => (
  <Content>
    <Products />
    <Total />
    <Button as={Link} to="/payment">
      Seguir para o pagamento
    </Button>
  </Content>
)

export default App
