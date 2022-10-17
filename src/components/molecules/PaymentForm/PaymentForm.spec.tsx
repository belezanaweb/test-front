import { FieldValues, useForm } from 'react-hook-form'
import { render, fireEvent, waitFor } from '../../../test-utils'
import { InputError } from '../../atoms/Input/Input.styles'
import { PaymentForm } from './PaymentForm'

const renderComponent = () => render(<Form />)

const Form = () => {
    const {
        register,
        formState: { errors }
    } = useForm<FieldValues>({
        mode: 'all'
    })
    return (
        <PaymentForm register={register} errors={errors} />
    )
}

describe('PaymentForm', () => {
    test('renders correctly', async () => {
        const { findByTestId, getByText } = renderComponent()
        const creditCardNumber = (await findByTestId('creditCardNumber')) as HTMLInputElement
        fireEvent.change(creditCardNumber, { target: { value: '11' } })
        fireEvent.blur(creditCardNumber)
        waitFor(() => getByText(InputError.invalid))
        fireEvent.change(creditCardNumber, { target: { value: '1111222233334444' } })
        expect(creditCardNumber.value).toBe('1111.2222.3333.4444')

        const creditCardName = (await findByTestId('creditCardName')) as HTMLInputElement
        fireEvent.change(creditCardName, { target: { value: 'rodrigo quintas' } })
        expect(creditCardName.value).toBe('rodrigo quintas')
        fireEvent.change(creditCardName, { target: { value: '' } })
        fireEvent.blur(creditCardName)
        waitFor(() => getByText(InputError.required))

        const creditCardDate = (await findByTestId('creditCardDate')) as HTMLInputElement
        fireEvent.change(creditCardDate, { target: { value: '111111' } })
        waitFor(() => getByText(InputError.invalid))
        fireEvent.change(creditCardDate, { target: { value: '082024' } })
        expect(creditCardDate.value).toBe('08/2024')
        fireEvent.change(creditCardDate, { target: { value: '' } })
        waitFor(() => getByText(InputError.required))

        const creditCardCvv = (await findByTestId('creditCardCvv')) as HTMLInputElement
        fireEvent.change(creditCardCvv, { target: { value: '1' } })
        waitFor(() => getByText(InputError.invalid))
        fireEvent.change(creditCardCvv, { target: { value: '123' } })
        expect(creditCardCvv.value).toBe('123')
    })
})
