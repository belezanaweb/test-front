import { Form, Formik } from 'formik'
import React from 'react'

import { renderWithThemeProvider } from '../../../utils/test.utils'

import FormControl from './FormControl'

const formikProps = {
  initialValues: {},
  onSubmit: jest.fn()
}

describe('FormControl', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render without crash', () => {
    const id = 'formControl'

    const { getByTestId } = renderWithThemeProvider(
      <Formik {...formikProps}>
        <Form>
          <FormControl data-testid={id} name="cardNumber" label="Número do cartão" />
        </Form>
      </Formik>
    )

    const formControl = getByTestId(id)

    expect(formControl).toBeInTheDocument()
  })
})
