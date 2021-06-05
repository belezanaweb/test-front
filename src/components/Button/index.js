import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.button.background};
  border-radius: 3px;
  box-shadow: inset 0 -3px 0 0 ${({ theme }) => theme.colors.button.hover},
    0 2px 4px 0 ${({ theme }) => theme.colors.button.shadow};
  border: none;
  cursor: pointer;
  transition: 300ms background-color ease;

  color: ${({ theme }) => theme.colors.button.text};
  font-family: ${({ theme }) => theme.font.family};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:disabled {
    background: lightgray;
    box-shadow: inset 0 -3px 0 0 gray, 0 2px 4px 0 lightgray;
    color: gray;
  }
`
