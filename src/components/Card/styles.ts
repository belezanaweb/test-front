import styled from 'styled-components'

export const Container = styled.section`
  padding: 16px 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray01};
  background-color: ${(props) => props.theme.colors.white};
`

export const Title = styled.h2`
  font-size: ${(props) => props.theme.font.size.xlarge};
  margin-bottom: 16px;
`
