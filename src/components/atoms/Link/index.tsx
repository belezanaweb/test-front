import React from 'react'

import { NavLink } from './styles'

export type Props = {
  children: string | string[]
  active: boolean
  func?: () => void
}

function Link({ children, active, func }: Props) {
  return (
    <NavLink active={active} onClick={() => func && func()}>
      {children}
    </NavLink>
  )
}

export default Link
