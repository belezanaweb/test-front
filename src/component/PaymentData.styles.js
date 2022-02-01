import styled from 'styled-components'

export const DateContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  @media screen and (max-width: 1023px) {
    max-width: 160px;
  }
`

export const CvvContainer = styled.div`
  flex: 1;
`

export const ContainerBottom = styled.div`
  display: flex;
`

export const Error = styled.p`
  color: #f30;
  font-size: 12px;
`
