import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  background: white;
  padding: ${({ theme }) => theme.padding.p10} ${({ theme }) => theme.padding.p4};
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
