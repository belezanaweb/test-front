import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import * as palette from './../../styles/variables'

const HButton = styled(Link)`
  background: transparent;
  color: #ccc;
  font-size: ${palette.FONTSIZE_1};
  border: none;
  font-weight: bold;
  font-family: ${palette.FONT_FAMILY};
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: ${palette.PRIMARY};
  }
  &:focus {
    outline-style: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 18px 20px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 29, 0.22);
  background-color: ${palette.BACKGROUND_CONTAINERS};
`
export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <HButton to={'/cart'}>SACOLA</HButton>
        <HButton to={'/payment'}>PAGAMENTO</HButton>
        <HButton to={'/checkout'}>CONFIRMAÇÃO</HButton>
      </Container>
    )
  }
}
