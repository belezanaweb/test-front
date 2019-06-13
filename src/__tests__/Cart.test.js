import React from 'react'
import ReactDOM from 'react-dom'
import Cart from '../scenes/Checkout/pages/Cart'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cart />, div)
  ReactDOM.unmountComponentAtNode(div)
})
