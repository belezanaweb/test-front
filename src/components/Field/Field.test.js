import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theme'
import Input from '../Input'
import Field from '.'

describe('Field', () => {
  it('should render [snapshot]', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Field htmlFor="field" label="Label">
          <Input id="field" />
        </Field>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with errors [snapshot]', () => {
    const mockError = 'Campo requerido.'
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Field htmlFor="field" label="Label" error={mockError}>
          <Input id="field" hasErrors={!!mockError} />
        </Field>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
