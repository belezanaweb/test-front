import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.light.colors['--c-base']};
  box-shadow: 5px 0 4px 1px rgba(0, 0, 29, 0.12);
`

export const Content = styled.div`
  width: 450px;
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
`
export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.light.colors['--c-one']};
  ${(props: { isActualStep: boolean }) =>
    props.isActualStep &&
    css`
      color: ${(props) => props.theme.light.colors['--c-contrast-one']};
    `}
`
