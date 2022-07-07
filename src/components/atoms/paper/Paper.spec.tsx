import React from 'react'
import { render } from '../../../test-utils'
import { Paper, PaperProps } from './Paper'

const renderComponent = ({ title, children }: PaperProps) =>
  render(<Paper title={title}>{children}</Paper>)

describe('Paper', () => {
  test('renders correctly', () => {
    const { getByText } = renderComponent({
      title: 'produtos',
      children: 'sucesso'
    })
    getByText(/produtos/i)
    getByText(/sucesso/i)
  })
})
