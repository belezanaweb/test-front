import React from 'react';
import Cart from './';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Routes  from '../index'

import { render, cleanup, screen, fireEvent, waitFor, findByLabelText } from '../../test-utils'


beforeAll(cleanup)

describe('<Cart />', () => {
  it('renders Loading', () => {
    const { getByText, getByTestId } = render(<Cart />)
    const linkElement = getByText(/carregando.../i)

    expect(linkElement).toBeInTheDocument()

    
  })

  it('renders Component after Loading', async () => {
    const { getByTestId } = render(<Cart />)

    await waitFor(() => {
      expect(getByTestId('products')).toBeInTheDocument()
    })
  })

  it('Navigate to Payment page', async () => {
    const history = createMemoryHistory()
    const route = '/payment'

    const { getByText, getByTestId } = render(
      <Router history={history}>
        <Routes />
      </Router>)

      const button = await waitFor(() => getByText(/SEGUIR PARA O PAGAMENTO/i))
      fireEvent.click(button)
      expect(getByTestId('location-display')).toHaveTextContent(route)
    })

});

