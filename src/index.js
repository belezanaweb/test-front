import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const renderToDOM = () => {
  const root = document.getElementById('root')
  if (root !== null) {
    ReactDOM.render(<App />, root)
  }
}
renderToDOM()
export { renderToDOM }
