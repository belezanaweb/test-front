import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Success from '../../pages/Success'
import configureStore from '../../store'

const history = createMemoryHistory()
const { store } = configureStore()

const renderSuccess = () =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <Success />
      </Router>
    </Provider>
  )

describe('Testing Success.js', () => {
  it('should be able render success page', () => {
    renderSuccess()

    expect(screen.getByTestId('success-container')).toBeInTheDocument()
    expect(screen.getByText(/COMPRA EFETUADA COM SUCESSO/)).toBeInTheDocument()
  })
})
