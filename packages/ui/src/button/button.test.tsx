import { vi } from 'vitest'
import { screen, setup } from '../test/utils'
import { Button } from './button'

describe('Button', () => {
  it('should render properly', async () => {
    const onClick = vi.fn()

    const { user } = setup(<Button onClick={onClick} />)

    expect(screen.getByText('click me')).toBeInTheDocument()

    await user.click(screen.getByText('click me'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
