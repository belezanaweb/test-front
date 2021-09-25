import styled, { css } from 'styled-components'

import { Container } from '../../components/Utils/styles'

export const ContainerResume = styled(Container)`
  flex-direction: column;

  @media screen and (min-width: 64em) {
    max-width: 620px;
  }
`

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid #ccc;
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

export const InfoDesc = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  color: #212122;
`

export const InfoValue = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  color: #212122;
`
