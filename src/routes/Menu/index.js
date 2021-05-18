import React from 'react'

import { Container } from './styles'
import MenuItem from './MenuItem'

function Menu({ menus }) {
  return (
    <Container>
      {menus.length > 0 &&
        menus.map((menu) => {
          console.log('teste', menu)
          return <MenuItem menu={menu} />
        })}
    </Container>
  )
}

export default Menu
