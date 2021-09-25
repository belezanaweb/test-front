import React from 'react'

/**
 * Libs
 */
import { useHistory, useLocation } from 'react-router-dom'

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
  const location = useLocation()

  const checkIsActiveOption = (path) => {
    try {
      if (path === location.pathname) return true
      return false
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <Menu>
        <Option active={checkIsActiveOption('/bag')} onClick={() => redirect('/bag', history)}>
          Bag
        </Option>
        <Option
          active={checkIsActiveOption('/payment')}
          onClick={() => redirect('/payment', history)}
        >
          Payment
        </Option>
        <Option
          active={checkIsActiveOption('/finish')}
          onClick={() => redirect('/finish', history)}
        >
          Finish
        </Option>
      </Menu>
    </Wrapper>
  )
}

export default MenuComponent
