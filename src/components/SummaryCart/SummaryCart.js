import React from 'react'
import styled, { css } from 'styled-components'
import * as palette from './../../styles/variables'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 7px 0;
  align-content: space-around;
  max-height: 90px;
  padding: 15px;
`
const Line = styled.div`
  display: flex;
  margin: 2px 0;
  justify-content: space-between;
`

const DescText = styled.span`
  font-size: ${palette.FONTSIZE_2};
  font-family: ${palette.FONT_FAMILY};
`

const DiscountText = styled(DescText)`
  color: ${palette.PRIMARY};
`

const TotalText = styled(DescText)`
  font-weight: bold;
`

export default class SummaryCart extends React.Component {
  render() {
    return (
      <Container>
        <Line>
          <DescText>{'PRODUTOS'}</DescText>
          <DescText>{'R$ 300,00'}</DescText>
        </Line>
        <Line>
          <DescText>{'FRETE'}</DescText>
          <DescText>{'R$ 5,30'}</DescText>
        </Line>
        <Line>
          <DiscountText>{'DESCONTO'}</DiscountText>
          <DiscountText>{'- R$ 30,00'}</DiscountText>
        </Line>
        <Line>
          <TotalText>{'TOTAL'}</TotalText>
          <TotalText>{'R$ 300,00'}</TotalText>
        </Line>
      </Container>
    )
  }
}
