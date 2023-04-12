import { fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { render } from '../../utils/test-utils'

import { Header } from '.'
import * as routerDom from 'react-router'

const mockNavigate = jest.fn()

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate
}))

const mockUseLocation = jest.spyOn(routerDom, 'useLocation')

const renderComponent = () => {
  const queryClient = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    </BrowserRouter>
  )
  return { queryClient }
}

describe('Header component', () => {
  it('renders correctly', () => {
    renderComponent()

    expect(screen.getByText('Sacola')).toBeInTheDocument()
    expect(screen.getByText('Pagamento')).toBeInTheDocument()
    expect(screen.getByText('Confirmação')).toBeInTheDocument()
  })

  it.each([
    ['Sacola', '/bag'],
    ['Pagamento', '/payment'],
    ['Confirmação', '/confirmation']
  ])('testings %s', (text, path) => {
    renderComponent()
    const btn = screen.getByText(text)

    fireEvent.click(btn)

    expect(mockNavigate).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith(path)
  })
})
