import React from 'react'
import { render } from '@testing-library/react'
import { Title } from '../title'

describe('Title', () => {
  it('Should render the title', async () => {
    const { getByText } = render(<Title text="Text Title" classname="testing" />)
    expect(getByText('Text Title')).toHaveClass('testing')
  })
})
