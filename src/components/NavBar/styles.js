import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: white;
  padding: 12px 24px;
  justify-content: space-between;
  box-shadow: 5px 0 4px 1px rgba(0, 0, 29, 0.12);
`
export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.light.colors['--c-one']};
  ${(props) =>
    props.isActualStep &&
    css`
      color: ${(props) => props.theme.light.colors['--c-contrast-one']};
    `}
`
