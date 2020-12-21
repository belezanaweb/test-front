import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import GlobalStyle from './layout/GlobalStyle'
import Navbar from './layout/Navbar'

import Routes from './Routes'

import { find } from './reducers/products'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(find('5b15c4923100004a006f3c07'))
  }, [])

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
