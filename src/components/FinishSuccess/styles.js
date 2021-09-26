import styled, { css } from 'styled-components'

import { Container } from '../../components/Utils/styles'

export const ContainerFinishSuccess = styled(Container)`
  flex-direction: column;

  @media screen and (min-width: 64em) {
    max-width: 620px;
  }
`

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 3px;
  padding: 12px 15px;
`

export const RowInfo = styled.div`
  justify-content: space-between;
  margin: 3px 0;

  ${(props) =>
    props.negative &&
    css`
      span {
        color: #ff7800;
      }
    `}

  ${(props) =>
    props.total &&
    css`
      margin-top: 7px;

      span {
        font-weight: bold;
      }
    `}
`

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #ff7800;
  padding: 9px;
  border-radius: 50px;
`

export const Icon = styled.img``

export const Message = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ff7800;
  margin-top: 10px;
`
