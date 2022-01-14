import styled from 'styled-components'

export const SummaryContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 3px;

  & div + div {
    margin-top: 1rem;
  }

  @media (max-width: 720px) {
    margin: 1rem 0;
    padding: 1rem;

    & div + div {
      margin-top: 0.5rem;
    }
  }
`

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SummaryText = styled.p`
  font-weight: normal;
  color: ${({ discount }) => (discount ? '#FF7800' : '#212122')};
`

export const SummaryTextBold = styled.p`
  font-weight: bold;
  color: #212122;
`
