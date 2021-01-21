import styled from 'styled-components/macro'

export const SummaryWrapper = styled.div`
  padding: 2rem 0;
  text-align: center;
`

export const SummaryText = styled.p`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.7rem;
  margin-top: 1.2rem;
  text-transform: uppercase;
`

export const SummaryData = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SummaryProduct = styled.div`
  @media (min-width: 768px) {
    margin-right: 2rem;
    width: 60%;
  }
`

export const SummaryTable = styled.div`
  @media (min-width: 768px) {
    width: 40%;

    section {
      margin-top: 0;
    }
  }
`
