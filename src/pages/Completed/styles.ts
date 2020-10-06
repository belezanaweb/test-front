import styled from 'styled-components'

export const CompletedStyled = styled('section')`
  padding: 2rem 0;
  text-align: center;
  svg {
    margin-bottom: ${(props) => props.theme.spacing};
  }
`
