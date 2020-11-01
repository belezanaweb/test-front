import React from 'react'
import { render } from '@testing-library/react'
import { Stepper } from './Stepper'

test('renders Stepper', () => {
  const { container } = render(
    <Stepper
      steps={[
        {
          active: true,
          title: 'Active'
        },
        {
          title: 'Inactive'
        }
      ]}
    />
  )

  expect(container).toMatchSnapshot()
})
