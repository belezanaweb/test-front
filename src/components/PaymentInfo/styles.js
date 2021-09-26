import styled from 'styled-components'

import { Container } from '../Utils/styles'

export const ContainerPaymentInfo = styled(Container)`
  flex-direction: column;

  @media screen and (min-width: 64em) {
    max-width: 620px;
  }
`

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 29, 0.22);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 29, 0.22);
  border-radius: 3px;
  padding: 12px;
`

export const Info = styled.p`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  text-transform: uppercase;
`
