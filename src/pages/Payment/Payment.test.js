import React from 'react'
import { screen } from '@testing-library/react'
import renderWithRouter from '../renderWithRouter'
import App from '../App'

describe('test component app', () => {
  test('test link Home', () => {
    renderWithRouter(<App />)
    const elementText = screen.getByText(/Home/)
    expect(elementText).toBeInTheDocument()
  })

  test('test link About', () => {
    renderWithRouter(<App />)
    const elementText = screen.getByText(/About/)
    expect(elementText).toBeInTheDocument()
  })

  test('test link favoritePokemon', () => {
    renderWithRouter(<App />)
    const elementText = screen.getByText(/Favorite Pokémon/)
    expect(elementText).toBeInTheDocument()
  })
})
