import styled from 'styled-components'
import { colors } from '../../assets/styled/tokens'

export const SuccessContainer = styled.div`
  width: 266.27px;
  height: 67.57px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
`

export const Success = styled.img`
  height: 39.51px;
  width: 39.51px;
  margin-bottom: 10px;
`

export const SuccessMessage = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  margin: 0;
  padding: 0;
  color: ${colors.orangeText};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 73px;
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  border-radius: 3px;
  align-items: left;

  @media screen and (max-device-width: 376px) {
    width: 340px;
  }
`

export const PriceContainer = styled.div`
  width: 100%;
  margin: 20px 0 0 2%;

  @media screen and (max-device-width: 376px) {
    margin: 20px 0 0 9%;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.grayBackground};
  height: 115vh;
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;

  @media screen and (max-device-width: 375px) {
    width: 341px;
  }
`
