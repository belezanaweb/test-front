import React, { useContext } from 'react'
import { HeaderContext } from '../../../contexts/HeaderContext'
import { List, ListItem, Navbar } from './Header.style'

type HeaderItem = {
  label: string
}

export interface HeaderProps {
  items: HeaderItem[]
}

export const Header: React.FC<HeaderProps> = ({ items = [] }: HeaderProps) => {
  const { headerPosition } = useContext(HeaderContext)
  return (
    <Navbar>
      <List>
        {items.map(({ label }, index) => (
          <ListItem active={index === headerPosition} key={label}>
            {label}
          </ListItem>
        ))}
      </List>
    </Navbar>
  )
}
