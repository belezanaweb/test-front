import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardDefault from '.'
import { MemoryRouter } from 'react-router-dom'

const props = {
  title: 'teste'
}

describe('CardDefault Component', () => {
  it('render the component', () => {
    render(<CardDefault {...props} />, { wrapper: MemoryRouter })

    expect(screen.getByRole('heading', { name: /teste/i })).toBeInTheDocument()
  })
})
