import React from 'react'
import * as S from './styled'

const Navbar = ({ step }) => {
  const navLinks = ['sacola', 'pagamento', 'confirmação']

  return (
    <S.Navbar>
      <S.NavbarList>
        {navLinks.map((currentItem, i) => {
          return (
            <S.NavbarItem key={currentItem} $step={i === step}>
              {currentItem}
            </S.NavbarItem>
          )
        })}
      </S.NavbarList>
    </S.Navbar>
  )
}

export default Navbar
