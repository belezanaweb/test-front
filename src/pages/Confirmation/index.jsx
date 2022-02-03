import React from 'react'
import Navbar from '../../components/Common/Navbar'
import CardDefault from '../../components/Common/CardDefault'
import CardSummary from '../../components/Common/CardSummary'
import styled from 'styled-components'
import SuccessBuy from '../../components/Common/SuccessBuy'

export default function Confirmation() {
  return (
    <main>
      <Navbar />
      <SuccessBuy />
      <Container>
        <div className="box">
          <CardDefault title="PAGAMENTO" type="payment" />
          <CardDefault title="CARTÃO DE CRÉDITO" type="product" />
          <CardSummary />
        </div>
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
