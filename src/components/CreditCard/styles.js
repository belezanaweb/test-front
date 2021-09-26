import styled from 'styled-components'

import { Container } from '../Utils/styles'

export const ContainerCreditCard = styled(Container)`
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

export const RowInput = styled.div`
  flex-direction: column;
  justify-content: space-between;
  margin: 12px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const ColInput = styled.div`
  justify-content: space-between;
  margin: 3px 0;

  > div {
    margin: 0 10px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`
