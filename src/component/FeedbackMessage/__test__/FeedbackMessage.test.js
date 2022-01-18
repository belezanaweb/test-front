import React from 'reat'
import { screen, render } from '@testing-library/react'
import FeedbackMessage from '../FeedbackMessage'

describe('Test of FeedbackMessage', () => {
  test('Test if render the message', () => {
    render(<FeedbackMessage message="COMPRA EFETUADA COM SUCESSO" />)
    expect(screen.getByText('COMPRA EFETUADA COM SUCESSO')).toBeInTheDocument()
  })
})
