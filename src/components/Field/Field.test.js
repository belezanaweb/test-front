import React from 'react'
import { render } from 'test-utils'
import Input from '../Input'
import Field from '.'

describe('Field', () => {
  it('should render [snapshot]', () => {
    const { container } = render(
      <Field htmlFor="field" label="Label">
        <Input id="field" />
      </Field>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with errors [snapshot]', () => {
    const mockError = 'Campo requerido.'
    const { container } = render(
      <Field htmlFor="field" label="Label" error={mockError}>
        <Input id="field" hasErrors={!!mockError} />
      </Field>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
