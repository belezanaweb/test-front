import { vi } from 'vitest'

import { render, screen, userEvent } from 'common-test-config'
import { Button } from './button'

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
