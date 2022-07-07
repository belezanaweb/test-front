import React from 'react'
import { render } from '../../../test-utils'
import { Title, TitleProps } from './Title'

const renderComponent = ({ children }: TitleProps) => render(<Title>{children}</Title>)

describe('Title', () => {
  test('renders correctly', () => {
    const { getByText } = renderComponent({
      children: 'produtos'
    })

    getByText(/produtos/i)
  })
})
