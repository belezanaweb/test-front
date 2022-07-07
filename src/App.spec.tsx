import React from 'react'
import { waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { render, fireEvent } from './test-utils'
import { App } from './App'
import { FormMessages } from './constants/formMessages'
import { setupMockServer } from '../mock/msw/setupMockServer'

setupMockServer()

const renderComponent = () => render(<App />)

describe('App', () => {
  test('renders correctly', async () => {
    const { getByText } = renderComponent()
    await waitFor(() => getByText(/L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium/i))
    getByText(/225,90 BRL/i)

    getByText(/Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml/i)
    getByText(/299,00 BRL/i)

    getByText(/Senscience Inner Restore Intensif - Máscara Capilar 50ml/i)
    getByText(/99,90 BRL/i)

    getByText(/seguir para o pagamento/i)
  })

  test('goes to pages correctly', async () => {
    const { getByText, getByRole, findByTestId } = renderComponent()
    await waitFor(() => getByText(/L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium/i))

    const button = getByRole('button')
    await fireEvent.click(button)

    await waitFor(() => getByText(/cartão de crédito/i))

    const cardNameInput = (await findByTestId('cardNameInput')) as HTMLInputElement
    await fireEvent.change(cardNameInput, { target: { value: 'josé' } })
    expect(cardNameInput.value).toBe('josé')
    await fireEvent.blur(cardNameInput)

    const cardNumberInput = (await findByTestId('cardNumberInput')) as HTMLInputElement
    await fireEvent.change(cardNumberInput, { target: { value: '111122223333444' } })
    await fireEvent.blur(cardNumberInput)

    const dateInput = (await findByTestId('dateInput')) as HTMLInputElement
    await fireEvent.change(dateInput, { target: { value: '122022' } })
    await fireEvent.blur(dateInput)

    const cvvInput = (await findByTestId('cvvInput')) as HTMLInputElement
    await fireEvent.change(cvvInput, { target: { value: '333' } })
    await fireEvent.blur(cvvInput)

    await waitFor(() => getByText(FormMessages.invalid))

    await fireEvent.change(cardNumberInput, { target: { value: '1111222233334444' } })
    await fireEvent.blur(cardNumberInput)
    await fireEvent.blur(cardNumberInput)
    await fireEvent.blur(cardNumberInput)

    await waitFor(() => expect(getByRole('button')).not.toBeDisabled)

    const buttonOrder = getByRole('button')

    await act(async () => {
      await fireEvent.click(buttonOrder)
    })

    getByText('josé')
    getByText('****.****.****.4444')
    getByText('12/2022')
  })
})
