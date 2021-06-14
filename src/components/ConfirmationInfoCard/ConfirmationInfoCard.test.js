import React from 'react'
import { render } from '@testing-library/react'
import ConfirmationInfoCard from './ConfirmationInfoCard'

const confirmationInfoCard = {
  creditCardNumber: '1234',
  name: 'marcos',
  expirationDate: '02/1995'
}

describe('ConfirmationInfoCard', () => {
  it('should render ConfirmationInfoCard', () => {
    const { container } = render(<ConfirmationInfoCard {...confirmationInfoCard} />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })
})
