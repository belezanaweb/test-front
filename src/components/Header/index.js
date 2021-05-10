import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Navbar } from '..'

const Header = () => {
  const [path, setPath] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setPath(location.pathname)
  }, [location.pathname])

  const checkActive = (name) => {
    switch (name) {
      case 'cart':
        return path === '/cart' || path === '/'
      case 'payment':
        return path === '/payment'
      case 'success':
        return path === '/success'
      default:
        return false
    }
  }

  return (
    <Navbar
      items={[
        { key: 1, name: 'Sacola', active: checkActive('cart') },
        { key: 2, name: 'Pagamento', active: checkActive('payment') },
        { key: 3, name: 'Confirmação', active: checkActive('success') }
      ]}
    />
  )
}

export default Header
