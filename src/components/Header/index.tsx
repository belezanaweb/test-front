import React from 'react'
import { List, ListItem, Navbar } from './style'

type HeaderItem = {
  label: string
}

export interface HeaderProps {
  items: HeaderItem[];
}

export const Header: React.FC<HeaderProps> = ({ items = [] }: HeaderProps) => {
  return (
    <Navbar>
      <List>
        {items.map(({ label }, index) => (
          <ListItem key={label}>{label}</ListItem>
        ))}
      </List>
    </Navbar>
  )
}
