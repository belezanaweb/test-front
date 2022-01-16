import styled from 'styled-components'

import { DesktopScreen } from '../../styles/Helpers'

import { StyledPurchaseSummary } from '../../components/modules/purchaseSummary/PurchaseSummary.styled'
import { StyledSuccessMessage } from '../../components/modules/successMessage/SuccessMessage.styled'

export const StyledPaymentSuccessPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${DesktopScreen`
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr 1fr;
  `}

  ${StyledSuccessMessage} {
    ${DesktopScreen`
      grid-row: 1;
      grid-column: span 2;
    `}
  }

  #paymentSection {
    ${DesktopScreen`
      grid-row: 2;
      grid-column: 1;
    `}
  }

  ${StyledPurchaseSummary} {
    ${DesktopScreen`
      grid-row: 3;
      grid-column: 1;
      height: fit-content;
    `}
  }

  #productSection {
    ${DesktopScreen`
      grid-row: 2 / 4;
      grid-column: 2;
    `}
  }
`
