import { screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { renderWithClient } from '../../utils/test-utils'

import { Bag } from '.'

describe('Bag page', () => {
  it('renders correctly', async () => {
    const result = renderWithClient(
      <BrowserRouter>
        <Bag />
      </BrowserRouter>
    )

    //verify if loads summary data
    expect(await result.findByText(/Seguir para o pagamento/i)).toBeInTheDocument()
    expect(await result.findByText('R$ 600,10')).toBeInTheDocument()

    //verify if loads products data
    expect(await result.findByText('R$ 243,90')).toBeInTheDocument()
  })
})
