import styled, { css } from 'styled-components'

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.light.colors['--c-one']};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
`

export const StyledInput = styled.input`
  width: 100%;
  border: solid 1px ${(props) => props.theme.light.colors['--c-tree']};
  border-radius: 3px;
  border-radius: 3px;
  padding: 14px 13px 12px;
  margin-top: 5px;

  color: ${(props) => props.theme.light.colors['--c-two']};
  font-size: 16px;

  ::placeholder {
    color: ${(props) => props.theme.light.colors['--c-two']};
    font-size: ${(props) => props.theme.fontSizes.large};
    letter-spacing: 1.5px;
  }

  &:focus {
    border-color: ${(props) => props.theme.light.colors['--c-contrast-focus']};
    color: ${(props) => props.theme.light.colors['--c-base-contrast']};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${(props) => props.theme.light.colors['--c-contrast-hover']};
    `}
`
export const StyledError = styled.p`
  color: ${(props) => props.theme.light.colors['--c-contrast-hover']};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: lighter;
  margin: 3px;
`
