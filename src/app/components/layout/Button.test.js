import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/light.theme.style'

describe('Title Section test', () => {
  test('Test if the Button Component is rendering', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button text="Seguir para o Pagamento" />
      </ThemeProvider>
    )
    expect(screen.getByText('Seguir para o Pagamento')).toBeInTheDocument()
  })
})
