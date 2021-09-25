import React from 'react'

/**
 * Libs
 */
import { useHistory } from 'react-router-dom'

/**
 * Helpers
 */
import { redirect } from '../../helpers'

/**
 * Styles
 */
import { Wrapper, Menu, Option } from './styles'

const MenuComponent = () => {
  const history = useHistory()

  return (
    <Wrapper>
      <Menu>
        <Option onClick={() => redirect('/bag', history)}>Bag</Option>
        <Option onClick={() => redirect('/payment', history)}>Payment</Option>
        <Option onClick={() => redirect('/finish', history)}>Finish</Option>
      </Menu>
    </Wrapper>
  )
}

export default MenuComponent
