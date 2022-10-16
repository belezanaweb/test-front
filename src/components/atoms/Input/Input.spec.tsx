import { render, fireEvent } from '../../../test-utils'
import { inputFormatCreditCardNumber, inputFormatValidDate } from '../../../utils/mask'
import { Input, InputProps, inputErrors } from './Input'

const renderComponent = ({ id, label, maxLength, placeholder, patterValidator, register, error, handlerInputValidator }: InputProps) =>
    render(<Input id={id} patterValidator={patterValidator} maxLength={maxLength} placeholder={placeholder} label={label} error={error} register={register} handlerInputValidator={handlerInputValidator} />)

describe('Input', () => {

    test('renders correctly', async () => {
        const { getByText, getByRole } = renderComponent({
            id: "cvv",
            label: "CVV:",
            maxLength: 3,
            placeholder: "___",
            register: jest.fn(),
            patterValidator: new RegExp("/^[A-Za-zs]+$")
        })
        getByText('CVV:')
        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: '123' } })
        expect(input.value).toBe('123')
    })

    test('test date', async () => {
        const { getByText, getByRole } = renderComponent({
            id: "creditCardDate",
            label: "Validade (mês/ano):",
            maxLength: 7,
            placeholder: "__/____",
            register: jest.fn(),
            patterValidator: new RegExp("/^(0[1-9]|10|11|12)/20[0-9]{2}$"),
            handlerInputValidator: inputFormatValidDate,
            error: inputErrors.invalid
        })
        getByText('Validade (mês/ano):')
        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: inputFormatValidDate('132023') } })
        getByText(inputErrors.invalid)
        expect(input.value).toBe('13/2023')
    })

    test('test credit card format', async () => {
        const { getByText, getByRole } = renderComponent({
            id: "creditCardNumber",
            label: "Número do cartão:",
            maxLength: 19,
            placeholder: "____.____.____.____",
            register: jest.fn(),
            patterValidator: new RegExp("/^ [0 - 9]{ 4}.[0 - 9]{ 4}.[0 - 9]{ 4}.[0 - 9]{ 4}$"),
            error: inputErrors.invalid,
            handlerInputValidator: inputFormatCreditCardNumber
        })
        getByText("Número do cartão:")
        getByText(inputErrors.invalid)
        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: inputFormatCreditCardNumber('1111222233334444') } })
        expect(input.value).toBe('1111.2222.3333.4444')
    })
})
