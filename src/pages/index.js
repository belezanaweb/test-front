import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Produtos from '../containers/Produtos'
import Total from '../containers/Total'

const Content = styled.div`
  display: grid;
  gap: 20px;
  padding: 10px;
`

const App = () => (
  <Content>
    <Produtos />
    <Total />
    <Button>Seguir para o pagamento</Button>
  </Content>
)

export default App
