import styled from 'styled-components'
import { colors } from '../../../assets/styled/tokens'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  border: 1px solid ${colors.grayBackground};
  border-radius: 3px;

  @media screen and (max-device-width: 375px) {
    width: 316px;
  }
`

export const Name = styled.p`
  font-size: 13px;
`

export const NameContainer = styled.div`
  height: 32px;
`

export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
`

export const PriceContainer = styled.div`
  height: 15px;
  text-align: left;
  @media screen and (max-device-width: 375px) {
    text-align: right;
  }
`

export const Image = styled.img`
  width: 65px;
  height: 65px;
`

export const ImageContainer = styled.div`
  margin: 11px 10px 14px 11px;
`
