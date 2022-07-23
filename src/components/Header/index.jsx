import React from 'react'
import { List, ListItem, Navbar } from './style'

export const Header = ({ items }) => {
  return (
    <Navbar>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} active={window.location.pathname === item.path}>
            {item.label}
          </ListItem>
        ))}
      </List>
    </Navbar>
  )
}
