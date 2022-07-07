import React from 'react'
import { useForm } from 'react-hook-form'
import { waitFor } from '@testing-library/react'
import { FormMessages } from '../../../constants/formMessages'
import { render, fireEvent } from '../../../test-utils'
import { FormData, PaymentForm } from './PaymentForm'

const FormComponent = () => {
  const {
    register,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onBlur'
  })

  return (
    <form>
      <PaymentForm register={register} errors={errors} />
    </form>
  )
}

const renderComponent = () => render(<FormComponent />)

describe('PaymentForm', () => {
  test('renders correctly', () => {
    const { getByText } = renderComponent()
    getByText(/nome do titular/i)
    getByText(/validade \(mês\/ano\)/i)
    getByText(/nome do titular/i)
  })

  test('renders input value correctly', async () => {
    const { findByTestId, getByText } = renderComponent()

    const cardNameInput = (await findByTestId('cardNameInput')) as HTMLInputElement
    await fireEvent.change(cardNameInput, { target: { value: 'josé' } })
    expect(cardNameInput.value).toBe('josé')
    await fireEvent.change(cardNameInput, { target: { value: '' } })
    await fireEvent.blur(cardNameInput)
    await waitFor(() => getByText(FormMessages.required))

    const cardNumberInput = (await findByTestId('cardNumberInput')) as HTMLInputElement
    await fireEvent.change(cardNumberInput, { target: { value: '1111222233334444' } })
    expect(cardNumberInput.value).toBe('1111.2222.3333.4444')
    await fireEvent.change(cardNumberInput, { target: { value: '11' } })
    await fireEvent.blur(cardNumberInput)
    await waitFor(() => getByText(FormMessages.invalid))

    const dateInput = (await findByTestId('dateInput')) as HTMLInputElement
    await fireEvent.change(dateInput, { target: { value: '122022' } })
    expect(dateInput.value).toBe('12/2022')

    const cvvInput = (await findByTestId('cvvInput')) as HTMLInputElement
    await fireEvent.change(cvvInput, { target: { value: '3333' } })
    expect(cvvInput.value).toBe('333')
  })
})
