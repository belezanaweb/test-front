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

  const handleRedirect = (path) => {
    try {
      if (location.pathname === '/bag') return false

      if (location.pathname === '/payment' && path === '/finish') return false

      redirect(path, history)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <Menu>
        <Option active={checkIsActiveOption('/bag')} onClick={() => handleRedirect('/bag')}>
          Bag
        </Option>
        <Option
          disabled={true}
          active={checkIsActiveOption('/payment')}
          onClick={() => handleRedirect('/payment')}
        >
          Payment
        </Option>
        <Option active={checkIsActiveOption('/finish')} onClick={() => handleRedirect('/finish')}>
          Finish
        </Option>
      </Menu>
    </Wrapper>
  )
}

export default MenuComponent
