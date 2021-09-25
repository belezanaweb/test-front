import React from 'react'

/**
 * Helpers
 */
import { Redirect } from '../../helpers'

/**
 * Styles
 */
import { Wrapper, Menu, Option } from './styles'

const MenuComponent = () => {
  return (
    <Wrapper>
      <Menu>
        <Option onClick={() => Redirect('/bag')}>Bag</Option>
        <Option onClick={() => Redirect('/payment')}>Payment</Option>
        <Option onClick={() => Redirect('/finish')}>Finish</Option>
      </Menu>
    </Wrapper>
  )
}

export default MenuComponent
