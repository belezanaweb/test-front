import React from 'react'
import { List, ListItem, Navbar } from './style'

export const Header = () => {
  const items = [
    {
      label: 'sacola',
      path: '/'
    },
    {
      label: 'pagamento',
      path: '/payment'
    },
    {
      label: 'confirmação',
      path: '/success'
    }
  ]

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
