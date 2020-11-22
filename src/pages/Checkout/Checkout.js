import React from 'react'
import styled from 'styled-components'
import iconCheck from './../../assets/icons/check-circle.svg'
import * as palette from './../../styles/variables'
import SummaryCart from '../../components/SummaryCart/SummaryCart'

export default function Checkout(props) {
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 18px 12px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 29, 0.22);
    flex-direction: column;
    background-color: ${palette.BACKGROUND_CONTAINERS};
  `

  const TitleCart = styled.h1`
    margin-left: 12px;
    font-size: ${palette.FONTSIZE_2};
    font-family: ${palette.FONT_FAMILY};
    font-weight: bold;
    color: #999;
  `
  const IconCheck = styled.img`
    display: flex;
    height: 40px;
    width: 100%;
  `
  const ApprovedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 12px 0;
  `

  const ApprovedDesc = styled.span`
    color: ${palette.PRIMARY};
    font-family: ${palette.FONT_FAMILY};
    width: 100%;
    text-align: center;
    margin-top: 12px;
  `

  const ApprovedText = styled.span`
    font-size: 14px;
    font-family: ${palette.FONT_FAMILY};
    color: #000;
  `

  function maskify(creditCard) {
    if (creditCard.length < 6) return creditCard
    const last4Characters = creditCard.substr(-4)
    const firstCharacter = creditCard.substr(0, '*')
    const maskingCharacters = creditCard.substr(1, creditCard.length - 5).replace(/\d/g, '*')
    return `${firstCharacter}${maskingCharacters}.${last4Characters}`
  }

  return (
    <>
      <ApprovedContainer>
        <IconCheck src={iconCheck} />
        <ApprovedDesc> {'COMPRA EFETUADA COM SUCESSO'}</ApprovedDesc>
      </ApprovedContainer>

      <TitleCart> PAGAMENTO </TitleCart>
      <Container>
        <ApprovedText>{maskify('9999999999999999')}</ApprovedText>
        <ApprovedText>Lucas Pazzim</ApprovedText>
        <ApprovedText>05/2022</ApprovedText>
      </Container>
      <TitleCart> PRODUTOS </TitleCart>
      <Container></Container>
      <SummaryCart />
    </>
  )
}
