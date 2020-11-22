import React from 'react'
import styled, { css } from 'styled-components'
import * as palette from './../../styles/variables'

const ImageItem = styled.img`
  max-height: 65px;
  max-width: 65px;
  margin: 12px 10px;
`

const DescItem = styled.p`
  font-size: 13px;
  font-family: ${palette.FONT_FAMILY};
  line-height: 16px;
  color: #212122;
  padding: 12px 10px;
  margin: 0;
`

const PriceItem = styled.p`
  font-size: ${palette.FONTSIZE_2};
  color: #212122;
  font-family: ${palette.FONT_FAMILY};
  text-align: right;
  margin: 0;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  border-radius: 3px;
  margin: 7px 0;
  align-content: spaced-between;
  max-height: 90px;
`

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 0 10px;
`

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <ImageItem
          src={this.props.item ? this.props.item.imageObjects[0].small : null}
          alt="product"
        />
        <ContainerText>
          <DescItem>{this.props.item ? this.props.item.name : null}</DescItem>
          <PriceItem>
            {this.props.item ? `R$ ${this.props.item.priceSpecification.price}` : null}
          </PriceItem>
        </ContainerText>
      </Container>
    )
  }
}
