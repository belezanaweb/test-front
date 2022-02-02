import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Common/Navbar'
import CardDefault from '../../components/Common/CardDefault'
import CardSummary from '../../components/Common/CardSummary'
import Button from '../../components/Common/Button'
import styled from 'styled-components'

export default function Cart() {
  const navigate = useNavigate()

  return (
    <main>
      <Navbar />
      <Container>
        <div className="box">
          <CardDefault title="CARTÃO DE CRÉDITO" type="form" />
          <CardSummary />
        </div>
        <Button text="FINALIZAR O PEDIDO" onClick={() => navigate('/confirmation')} />
      </Container>
    </main>
  )
}

const Container = styled.div`
  display: grid;
  padding: 0px 10px 50px 10px;
  gap: 20px;

  .box {
    display: grid;
    gap: 20px;
  }

  @media (min-width: 700px) {
    .box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`
