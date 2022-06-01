import React from 'react'
import { NavLink } from './styles'

export type Props = {
  children: string | string[],
  active: boolean
}

function Link({ children, active }: Props) {
  return (
    <NavLink href="" active={active}>
      {children}
    </NavLink>
  )
}

export default Link
