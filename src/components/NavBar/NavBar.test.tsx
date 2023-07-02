import { screen, render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import NavBar from '.'
import { describe, expect, it, vi, beforeEach } from 'vitest'
// import useBagStore from '../../store/useBagStore'
// import useNavigateStore from '../../store/useNavigateStore'
// import useFormStore from '../../store/useFormStore'

// vi.mock('../../store/useBagStore', () => ({
//   default: vi.fn()
// }))
// vi.mock('../../store/useNavigateStore', () => ({
//   default: vi.fn()
// }))

describe('<NavBar />', () => {
  //   beforeEach(() => {
  //     vi.mocked(useBagStore).mockReturnValue({ items: [{ quantity: 1 }] })
  //     vi.mocked(useNavigateStore).mockReturnValue({ items: [{ quantity: 1 }] })
  //   })

  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    )

    expect(screen.getByText('Sacola')).toBeInTheDocument()
    expect(screen.getByText('Pagamento')).toBeInTheDocument()
    expect(screen.getByText('Confirmação')).toBeInTheDocument()
  })
})
