import React from 'react'
import { Item } from './styles'

export const CustomNavItem = ({ pageName, text }) => {
  const isActive = window.location.pathname === pageName.toLowerCase()

  return <Item isActive={isActive}>{text}</Item>
}
