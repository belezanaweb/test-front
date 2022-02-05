import React from 'react'
import * as CSS from './style'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const path = location.pathname || ''

  return (
    <CSS.Header>
      <CSS.Menu>
        <CSS.Item active={path === '' || path === '/' || path.includes('cart')}>Sacola</CSS.Item>
        <CSS.Item active={path.includes('payment')}>Pagamento</CSS.Item>
        <CSS.Item active={path.includes('success')}>Confirmação</CSS.Item>
      </CSS.Menu>
    </CSS.Header>
  )
}
