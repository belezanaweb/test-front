import React from 'react'
import { List, ListItem, Navbar } from './style'

export const Header = ({ items }) => {
  return (
    <Navbar>
      <List>
        {/* {items.map((label, index) => (
          <ListItem key={index}>{label}</ListItem>
        ))} */}
      </List>
    </Navbar>
  )
}
