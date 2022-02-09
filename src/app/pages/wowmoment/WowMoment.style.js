import styled from 'styled-components'

export const ContainerWowMomentText = styled.section`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.SMALL} auto;
  align-items: center;
  h2 {
    color: ${({ theme }) => theme.colors.LIGHT_ORANGE};
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
    text-transform: uppercase;
  }
  img {
    margin-bottom: 10px;
  }
`
