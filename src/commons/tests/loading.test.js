import React from 'react'
import { render } from '@testing-library/react'
import { Loading } from '../loading'

describe('Loading', () => {
  it('Should render the loading icon', async () => {
    const { getByTestId } = render(<Loading />)
    expect(getByTestId('icon')).toHaveClass('fa-spin')
  })
})
