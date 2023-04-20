import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 500px;
  gap: ${({ theme }) => theme.margin.m10};
`
