import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, findByText } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  const renderComponent = () => render(<App />)
  const { container } = renderComponent()

  it('renders info page', async () => {
    // verify if the page is loaded after the data is loaded
    expect(
      await findByText(
        container,
        'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml'
      )
    ).toBeVisible()
    // verify if the page is loaded with the correct value product
    expect(await findByText(container, 'R$ 624,80')).toBeVisible()
    // verify if the page is loaded with the correct value total
    expect(await findByText(container, 'R$ 600,10')).toBeVisible()
    // verify text button
    expect(screen.getByText('Seguir para o pagamento')).toBeInTheDocument()
  })
})
