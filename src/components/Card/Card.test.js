import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './Card'

const CardDefaultProps = {
  children: <h1>card</h1>,
  title: 'titulo'
}

describe('Card', () => {
  it('should render Card', () => {
    const { container } = render(<Card {...CardDefaultProps} />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should not render title if it is not provided', () => {
    render(<Card {...CardDefaultProps} title={null} />)

    const title = screen.queryByTestId('title')

    expect(title).not.toBeInTheDocument()
  })

  it('should render title if it is provided', () => {
    render(<Card {...CardDefaultProps} />)

    const title = screen.queryByTestId('title')

    expect(title).toBeInTheDocument()
  })
})
