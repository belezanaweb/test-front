import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.m10};
  margin-top: ${({ theme }) => theme.margin.m8};
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
