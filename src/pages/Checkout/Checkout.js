import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import iconCheck from './../../assets/icons/check-circle.svg'
import * as palette from './../../styles/variables'
import SummaryCart from '../../components/SummaryCart/SummaryCart'
import ItemList from './../../components/ItemList/ItemList'

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

const PageContainer = styled.div``

const BottomContainer = styled.div`
  @media (min-width: 900px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
  }
`

export default function Checkout(props) {
  let history = useHistory()
  const data = useSelector((state) => state)

  useEffect(() => {
    if (!data.data.id || !data.userInfo.creditCard) history.push('/cart')
  }, [])

  function maskify(creditCard) {
    if (creditCard.length < 6) return creditCard
    const last4Characters = creditCard.substr(-4)
    const firstCharacter = creditCard.substr(0, '*')
    const maskingCharacters = creditCard.substr(1, creditCard.length - 5).replace(/\d/g, '*')
    return `${firstCharacter}${maskingCharacters}.${last4Characters}`
  }

  return (
    <PageContainer>
      <ApprovedContainer>
        <IconCheck src={iconCheck} />
        <ApprovedDesc> {'COMPRA EFETUADA COM SUCESSO'}</ApprovedDesc>
      </ApprovedContainer>

      <TitleCart> PAGAMENTO </TitleCart>
      <Container>
        <ApprovedText>
          {data.userInfo.creditCard ? maskify(data.userInfo.creditCard) : null}
        </ApprovedText>
        <ApprovedText>{data.userInfo.name}</ApprovedText>
        <ApprovedText>{data.userInfo.validThru}</ApprovedText>
      </Container>
      <TitleCart> PRODUTOS </TitleCart>
      <Container>
        {data.data.items &&
          data.data.items.map((e) => <ItemList key={e.product.sku} item={e.product} present />)}
      </Container>
      <BottomContainer>
        <SummaryCart info={data.data} />
      </BottomContainer>
    </PageContainer>
  )
}
