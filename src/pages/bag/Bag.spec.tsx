import React from 'react'
import { waitFor } from '@testing-library/react'
import * as router from 'react-router'
import { render, fireEvent } from '../../test-utils'
import { Bag } from './Bag'
import { BagProvider } from '../../contexts/BagContext'
import { setupMockServer } from '../../../mock/msw/setupMockServer'

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

setupMockServer()

const renderComponent = () =>
  render(
    <BagProvider>
      <Bag />
    </BagProvider>
  )

describe('Bag', () => {
  test('renders correctly', async () => {
    const { getByText } = renderComponent()
    await waitFor(() => getByText(/L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium/i))
    getByText(/225,90 BRL/i)

    getByText(/Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml/i)
    getByText(/299,00 BRL/i)

    getByText(/Senscience Inner Restore Intensif - Máscara Capilar 50ml/i)
    getByText(/99,90 BRL/i)
  })

  test('goes to payment page correctly', async () => {
    const { getByText, getByRole } = renderComponent()
    await waitFor(() => getByText(/L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium/i))

    const button = getByRole('button')
    await fireEvent.click(button)

    expect(navigate).toHaveBeenCalledWith('/payment')
  })
})
