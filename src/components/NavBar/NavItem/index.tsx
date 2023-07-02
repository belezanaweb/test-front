import React, { ReactNode } from 'react'
import { NavItemWrapper } from './styled'

export type NavItemProps = {
  selected: boolean,
  onClick: (value: string) => void,
  children: ReactNode
}

const NavItem = ({ selected, onClick, children }: NavItemProps) => {
  return (
    <NavItemWrapper onClick={onClick} selected={selected}>
      {children}
    </NavItemWrapper>
  )
}

export default NavItem
