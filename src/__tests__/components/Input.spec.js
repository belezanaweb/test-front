import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Form } from '@unform/web'

import { Input } from '../../components'

const formRef = {
  current: {
    scrollTo: jest.fn()
  }
}

const onSubmit = jest.fn()

describe('Testing Input.js', () => {
  it('should be able render input', () => {
    render(
      <Form ref={formRef} onSubmit={onSubmit}>
        <Input name="test-name" label="test-label" />
      </Form>
    )

    expect(screen.getByRole('textbox', { name: 'test-name', exact: true })).toBeInTheDocument()
    expect(screen.getByText('test-label:')).toBeTruthy()
  })

  it('should be able change input', async () => {
    render(
      <Form ref={formRef} onSubmit={onSubmit}>
        <Input name="test-name" label="test-label" />
      </Form>
    )

    const input = screen.getByRole('textbox', { name: 'test-name', exact: true })
    userEvent.type(input, 'Viktor Nikiforov')

    expect(input).toHaveValue('Viktor Nikiforov')
  })
})
