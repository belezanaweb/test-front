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
})
