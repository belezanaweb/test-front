import React from 'react'
import { render } from '@testing-library/react'
import { SuccessAlert } from './SuccessAlert'

test('renders SuccessAlert', () => {
  const { container } = render(<SuccessAlert>Teste</SuccessAlert>)

  expect(container).toMatchSnapshot()
})
