import React from 'react';
import Payment from './';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Routes  from '../index'


import { render, cleanup, screen, fireEvent, waitFor, findByLabelText, wait } from '../../test-utils'


beforeAll(cleanup)

describe('<Payment />', () => {
  it('renders Loading', () => {
    const { getByText } = render(<Payment />)
    const linkElement = getByText(/carregando.../i)

    expect(linkElement).toBeInTheDocument()

  })

  it('renders Component after Loading', async () => {
    const { getByTestId } = render(<Payment />)

    await waitFor(() => {
      expect(getByTestId('payment')).toBeInTheDocument()
    })
  })


  it('Send Form data', async () => {
    const history = createMemoryHistory()
    const {  getByText, getByTestId, queryByTestId } = render(
      <Router history={history}>
        <Payment />
      </Router>
    )
    
      await waitFor(() => getByTestId('form'));

      const form = getByTestId('form')

      const cardNumber = getByTestId('input-cardNumber')
      const cardName = getByTestId('input-cardName')
      const cardExpiress = getByTestId('input-cardExpiress')
      const cvv = getByTestId('input-cvv')

      const button = getByText(/FINALIZAR O PEDIDO/i);
        
        await wait(() => fireEvent.change(cardNumber, { target: { value: '12344567890987654' } }))
        await wait(() => fireEvent.change(cardName, { target: { value: 'Meu Nome' } }))
        await wait(() => fireEvent.change(cardExpiress, { target: { value: '12/2021' } }))
        await wait(() => fireEvent.change(cvv, { target: { value: '123' } }))

      await wait(() => fireEvent.click(button))


      
      expect(queryByTestId("input-error")).toBe(null);
    


  })

});

