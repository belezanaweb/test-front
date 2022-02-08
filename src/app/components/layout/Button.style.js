import styled from 'styled-components'

export const ContainerButton = styled.section`
  margin: ${({ theme }) => theme.spacing.SMALL};
  button {
    background-color: ${({ theme }) => theme.colors.ORANGE};
    border-radius: ${({ theme }) => theme.borderRadius.SMALL};
    min-height: 60px;
    border: none;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.BIG};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.WHITE};
    font-weight: bold;
    box-shadow: inset 0px -3px 0px rgb(0 0 0 / 25%);
  }
`
