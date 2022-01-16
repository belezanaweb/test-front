import styled from 'styled-components'

import { DesktopScreen } from '../../styles/Helpers'

import { StyledButton } from '../../components/elements/button/Button.styled'
import { StyledPurchaseProducts } from '../../components/modules/purchaseProducts/PurchaseProducts.styled'
import { StyledPurchaseSummary } from '../../components/modules/purchaseSummary/PurchaseSummary.styled'

export const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${DesktopScreen`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
  `}

  ${StyledPurchaseProducts} {
    ${DesktopScreen`
      grid-row: span 2;
      grid-column: 1;
    `}
  }

  ${StyledPurchaseSummary} {
    ${DesktopScreen`
      grid-column: 2;
      height: fit-content;
    `}
  }

  ${StyledButton} {
    ${DesktopScreen`
      grid-column: 2;
    `}
  }
`
