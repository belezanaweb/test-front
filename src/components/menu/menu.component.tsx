import React, { FC } from 'react'
import { MenuStyled, MenuItemStyled } from './menu.style'

export const Menu: FC<{ children?: never }> = () => {
  const current = ''

  return (
    <MenuStyled>
      <MenuItemStyled to="/cart" active={current === ''}>
        Sacola
      </MenuItemStyled>
      <MenuItemStyled to="/payment" active={current === ''}>
        Pagamento
      </MenuItemStyled>
      <MenuItemStyled to="/confirm" active={current === ''}>
        Confirmação
      </MenuItemStyled>
    </MenuStyled>
  )
}
