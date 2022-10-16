import { render, fireEvent } from '../../../test-utils'
import { Button, ButtonProps } from './Button'


const renderComponent = ({ text, type, onClick, disabled }: ButtonProps) =>
    render(<Button disabled={disabled} text={text} type={type} onClick={onClick}></Button>)

describe('Button', () => {

    test('renders correctly', async () => {
        const { getByText } = renderComponent({
            text: "avançar",
            type: "submit",
            disabled: true,
            onClick: jest.fn()
        })

        const linkElement = getByText("avançar")
        expect(linkElement).toBeTruthy()
    })

    test('test click disabled', async () => {
        const click = jest.fn()
        const { getByText } = renderComponent({
            text: "avançar",
            type: "button",
            disabled: true,
            onClick: click
        })
        const linkElement = getByText("avançar")
        fireEvent.click(linkElement)
        expect(click).toHaveBeenCalledTimes(0)
    })

    test('test click enable', async () => {
        const click = jest.fn()
        const { getByText } = renderComponent({
            text: "avançar",
            type: "button",
            disabled: false,
            onClick: click
        })
        const linkElement = getByText("avançar")
        fireEvent.click(linkElement)
        expect(click).toHaveBeenCalledTimes(1)
    })
})
