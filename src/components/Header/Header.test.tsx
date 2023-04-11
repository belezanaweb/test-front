import { screen } from '@testing-library/react'
import { render } from '../../utils/test-utils'

import { Header } from '.'

import 'jest-styled-components'

test('Header component', () => {
  it('renders correctly', () => {
    render(<Header />)

    expect(screen.getByText('Sacola')).toBeInTheDocument()
    expect(screen.getByText('Pagamento')).toBeInTheDocument()
    expect(screen.getByText('Confirmação')).toBeInTheDocument()
  })
})
