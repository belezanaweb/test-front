import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import PurchaseResume from '.'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import theme from '../../theme'
import useMask from '../../utils/maskUtil'

vi.mock('../../utils/maskUtil', () => ({
  default: vi.fn()
}))

const cardCensored = vi.fn()

describe('<PurchaseResume />', () => {
  beforeEach(() => {
    vi.mocked(cardCensored).mockReturnValue('**** **** **** 0000')
    vi.mocked(useMask).mockReturnValue(cardCensored)
  })

  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <PurchaseResume cardNumber="0000 0000 0000 0000" cardOwner="foo" expirationDate="00/00" />
      </ThemeProvider>
    )

    expect(screen.getByText('foo')).toBeInTheDocument()
    expect(screen.getByText('00/00')).toBeInTheDocument()
    expect(screen.getByText('**** **** **** 0000')).toBeInTheDocument()
  })
})
