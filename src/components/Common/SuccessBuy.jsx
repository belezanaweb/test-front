import React from 'react'
import styled from 'styled-components'
import Circle from '../../assets/circle.png'
import Check from '../../assets/check.png'

/**
 *  Function to render default card
 */

export default function SuccessBuy() {
  return (
    <Container>
      <ContainerIcon>
        <img className="check" src={Check} alt="Check" />
        <img src={Circle} alt="Circle" />
      </ContainerIcon>
      <h2>COMPRA EFETUADA COM SUCESSO</h2>
    </Container>
  )
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #ff7800;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
    margin: 11px 0px 20px 0px;
  }
`

export const ContainerIcon = styled.div`
  margin-top: 2px;
  position: relative;
  top: 0px
  left: 0px;

  .check {
    position: absolute;
    top: 12px;
    left: 9px;
  }
`
