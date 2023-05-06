import { vi } from 'vitest'
import { screen, setup } from '../test/utils'
import { Button } from './button'

describe('Button', () => {
  it('should render properly', async () => {
    const onClick = vi.fn()

    const { user } = setup(<Button onClick={onClick}>click me</Button>)

    expect(screen.getByText('click me')).toBeInTheDocument()

    await user.click(screen.getByText('click me'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should show loading state properly', () => {
    setup(<Button isLoading>click me</Button>)

    expect(screen.queryByRole('button', { name: 'click me' })).not.toBeInTheDocument()

    const buttonElement = screen.getByRole('button', { name: 'Loading...' })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('disabled')
  })
})
