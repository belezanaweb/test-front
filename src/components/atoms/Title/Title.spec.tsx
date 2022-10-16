import { render } from '../../../test-utils'
import { Title, TitleProps } from './Title'

const renderComponent = ({ children }: TitleProps) =>
    render(<Title>{children}</Title>)

describe('Title', () => {

    test('renders correctly', async () => {
        const { getByText } = renderComponent({
            children: "teste de título"
        })
        getByText("teste de título")
    })
})
