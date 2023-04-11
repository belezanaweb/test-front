import styled from 'styled-components'

export const ButtonWrapper =
  styled.button <
  { variant?: string } >
  `
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 16px 8px;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 4px;
  margin-top: 24px;
  color: ${props => props.theme.colors.white};
	border: none;
  background-color: ${props => props.variant === 'primary' ? props.theme.colors.primary : props.theme.colors.black}
`
