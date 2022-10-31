import styled from 'styled-components'
import { ThemeRoot, ThemeContainer, ThemeContent } from '../../styles/theme'

export const Root = styled(ThemeRoot)``

export const Container = styled(ThemeContainer)``

export const Content = styled(ThemeContent)``

export const Warper = styled.div`
  padding: 12px;
  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.light.colors['--c-four']};
    margin-left: 12px;
    margin-bottom: 8px;
    font-size: ${(props) => props.theme.fontSizes.mediumLarge};
  }
`
export const SuccessWarper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 12px 0 8px;
  img {
    width: 40px;
    height: 39px;
    margin-bottom: 12px;
  }
  p {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizes.mediumLarge};
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.theme.light.colors['--c-contrast-one']};
  }
`

export const PaymentContainer = styled.div`
  margin-bottom: 20px;
  p {
    color: ${(props) => props.theme.light.colors['--c-base-contrast-two']};
    font-size: ${(props) => props.theme.fontSizes.mediumLarge};
    text-transform: uppercase;
  }
`
