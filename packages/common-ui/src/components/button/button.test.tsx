import { screen } from '@testing-library/react'
import { vi } from 'vitest'
import { customRender, user } from '../../test/utils'
import { Button } from './Button'

describe('Button', () => {
  it('should render Button with success and mock user click behavior', async () => {
    const onClick = vi.fn()
    const element = screen.getByText('button test')

    customRender(<Button onClick={onClick}>button test</Button>)
    expect(element).toBeInTheDocument()

    await user.click(element)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
