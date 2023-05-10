import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Title = styled.h2`
  font-size: ${(props) => props.theme.font.size.xlarge};
  font-weight: normal;
`

export const Text = styled.p`
  font-size: ${(props) => props.theme.font.size.medium};
  color: ${(props) => props.theme.colors.gray02};
`
