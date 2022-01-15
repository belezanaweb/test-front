import styled from 'styled-components'

import { StyledPageTitle } from '../../elements/pageTitle/PageTitle.styled'

export const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledMainContent = styled.main`
  padding: 0.625rem;

  ${StyledPageTitle} {
    margin-bottom: 0.3125rem;
  }
`
