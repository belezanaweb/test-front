import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as palette from './../../styles/variables'

const HButton = styled(Link)`
  background: transparent;
  color: ${(props) => (props.selected ? palette.PRIMARY : '#ccc')};
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

export default function Header() {
  const [selectedPage, setSelectedPage] = useState(1)

  useEffect(() => {
    if (window.location.pathname === '/cart') setSelectedPage(1)
    if (window.location.pathname === '/payment') setSelectedPage(2)
    if (window.location.pathname === '/checkout') setSelectedPage(3)
  }, [])

  return (
    <Container>
      <HButton
        selected={selectedPage === 1 ? true : false}
        onClick={() => setSelectedPage(1)}
        to={'/cart'}
      >
        SACOLA
      </HButton>
      <HButton
        selected={selectedPage === 2 ? true : false}
        onClick={() => setSelectedPage(2)}
        to={'/payment'}
      >
        PAGAMENTO
      </HButton>
      <HButton
        selected={selectedPage === 3 ? true : false}
        onClick={() => setSelectedPage(3)}
        to={'/checkout'}
      >
        CONFIRMAÇÃO
      </HButton>
    </Container>
  )
}
