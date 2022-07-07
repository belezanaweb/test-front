import React from 'react'
import { render, fireEvent } from '../../../test-utils'
import { BagDetails, BagDetailsProps } from './BagDetails'
import { bagMock } from '../../../../mock/bag'

const buttonAction = jest.fn()
const buttonDataMock = { label: 'seguir para o pagamento', action: buttonAction }

const renderComponent = ({ bag, buttonData }: BagDetailsProps) =>
  render(<BagDetails bag={bag} buttonData={buttonData} />)

describe('BagDetails', () => {
  test('renders correctly', async () => {
    const { getByText, getByRole } = renderComponent({ bag: bagMock, buttonData: buttonDataMock })
    getByText(/produtos/i)
    getByText(/frete/i)
    getByText(/desconto/i)
    getByText(/total/i)
    getByText(/624,80 BRL/i)
    getByText(/5,30 BRL/i)
    getByText(/- 30,00 BRL/i)
    getByText(/618,90 BRL/i)

    getByText(/seguir para o pagamento/i)

    const button = getByRole('button')
    await fireEvent.click(button)

    expect(buttonAction).toHaveBeenCalledTimes(1)
  })
})
