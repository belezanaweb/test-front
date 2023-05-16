import { vi } from 'vitest'

import { screen } from '@testing-library/react'
import { render, userEvent } from '../test/utils'
import { Button } from './button'

import '../test/setup-test'

describe('Button', () => {
  let buttonElement: HTMLElement
  const onClickFn = vi.fn()

  beforeEach(() => {
    render(<Button onClick={onClickFn}>Next</Button>)
    buttonElement = screen.getByTestId('common-ui-button')
  })

  it('should render element correctly', () => {
    expect(buttonElement).toBeInTheDocument()
  })

  it('should call onClick() event when user touch on button', async () => {
    await userEvent.click(buttonElement)
    expect(onClickFn).toHaveBeenCalledTimes(1)
  })
})
