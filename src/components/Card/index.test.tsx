import { render, screen } from 'test/setup-test'
import { Card } from './index'

describe('Card', () => {
  it('should render the content without a title', () => {
    const title = 'Card title'
    const content = 'content'

    const { getByText } = render(<Card>{content}</Card>)

    expect(screen.queryByText(title)).not.toBeInTheDocument()
    expect(getByText(content)).toBeInTheDocument()
  })

  it('should render the content and the title', () => {
    const title = 'Card title'
    const content = 'content'

    const { getByText } = render(<Card title={title}>{content}</Card>)

    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(content)).toBeInTheDocument()
  })
})
