import React from 'react'
import Navbar from '../../components/Common/Navbar'
import CardDefault from '../../components/Common/CardDefault'
import CardSummary from '../../components/Common/CardSummary'
import Button from '../../components/Common/Button'
import styled from 'styled-components'

export default function Cart() {
  function onSubmit(e) {
    var el = document.getElementById('formSubmitCard')
    el.click()
  }

  return (
    <main>
      <Navbar />
      <Container>
        <div className="box">
          <CardDefault title="CARTÃO DE CRÉDITO" type="form" />
          <CardSummary />
        </div>
        <Button id="buttonForm" text="FINALIZAR O PEDIDO" type="submit" onClick={onSubmit} />
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
