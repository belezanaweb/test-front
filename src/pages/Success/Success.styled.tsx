import styled from 'styled-components/macro'

export const SuccessWrapper = styled.div`
  padding: 2rem 0;
  text-align: center;
`

export const SuccessText = styled.p`
  color: ${({ theme }) => theme.colors.activeLighten};
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.7rem;
  margin-top: 1.2rem;
  text-transform: uppercase;
`

export const PaymentText = styled.p`
  color: ${({ theme }) => theme.colors.baseDarken};
  font-size: 1.4rem;
  line-height: 1.7rem;
`

export const SuccessData = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SuccessProduct = styled.div`
  @media (min-width: 768px) {
    margin-right: 2rem;
    width: 60%;
  }
`

export const SuccessTable = styled.div`
  @media (min-width: 768px) {
    width: 40%;

    section {
      margin-top: 0;
    }
  }
`
