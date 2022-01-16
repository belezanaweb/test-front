import styled from 'styled-components'

import { StyledPageTitle } from '../../elements/pageTitle/PageTitle.styled'

import { DesktopScreen } from '../../../styles/Helpers'

export const StyledCheckout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const StyledMainContent = styled.main`
  padding: 0.625rem;
  max-width: 420px;
  margin: 0 auto;

  ${DesktopScreen`
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem;
  `}

  ${StyledPageTitle} {
    margin-bottom: 0.3125rem;

    ${DesktopScreen`
      margin-bottom: 1rem;
    `}
  }
`
