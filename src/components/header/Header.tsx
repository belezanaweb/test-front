import React from 'react'
import { List, ListItem, Navbar } from './Header.style'

type HeaderItem = {
  label: string
}

interface HeaderProps {
  items: HeaderItem[];
}

export const Header: React.FC<HeaderProps> = ({ items = [] }: HeaderProps) => (
  <Navbar>
    <List>
      {items.map(({ label }) => (
        <ListItem active={label === 'sacola'} key={label}>
          {label}
        </ListItem>
      ))}
    </List>
  </Navbar>
)
