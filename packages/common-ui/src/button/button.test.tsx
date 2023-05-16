import { screen } from '@testing-library/react'
import { vi } from 'vitest'
import { render, userEvent } from '../test/utils'
import { Button } from './button'

describe('Button', () => {
  it('should render Button with success and mock user click behavior', async () => {
    const onClick = vi.fn()
    const element = screen.getByText('button test')

    render(<Button onClick={onClick}>button test</Button>)
    expect(element).toBeInTheDocument()

    await userEvent.click(element)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
