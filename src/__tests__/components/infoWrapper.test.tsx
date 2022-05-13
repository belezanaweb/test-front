import React from 'react'
import InfoWrapper from '../../components/InfoWrapper'
import { render, screen } from '../../util/test-utils'

const props = {
  title: 'example title'
}

describe('InfoWrapper Component', () => {
  it('should render correctly', () => {
    render(<InfoWrapper {...props}>Item Wrapped</InfoWrapper>)

    expect(screen.getByText(/example title/i)).toBeInTheDocument()

    expect(screen.getByTestId('wrapper-infoWrapper')).toHaveStyle({
      'background-color': '#FFFFFF',
      'box-shadow': '1px 1px 5px rgba(0,0,29,0.22)'
    })
  })
})
