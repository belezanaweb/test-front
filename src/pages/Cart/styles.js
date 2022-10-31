import styled from 'styled-components'

export const Container = styled.div`
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
