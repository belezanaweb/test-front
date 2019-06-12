import styled from 'styled-components'
import React from 'react'

import colors from '../../../../configs/colors'
import metrics from '../../../../configs/metrics'

export const Container = styled.div`
  display: relative;
  width: 100%;
  margin: 5px 0;
  background-color: ${colors.white};
  border-radius: ${metrics.borderRadius};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  padding: 5px 10px; //fixing padding because layout with little padding out of default
  &.cart {
    padding: 5px 12px; //fixing padding because layout with little padding out of default
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`

export const Item = styled.li`
  width: 100%;
  height: 90px;
  border: 1px #eee solid;
  border-radius: ${metrics.borderRadius};
  display: inline-flex;
  margin: 7px 0 8px;
  padding: 4px 0px;
  line-height: 16px;
  // align-items: center;
  &.condensed {
    margin: 15px 0 6px 0;
    &:first-child {
      margin: 10px 0 0 0;
    }
    height: 64px;
    div > img {
      width: 45px;
      height: 45px;
    }
  }
`

export const BoxImage = styled.div`
  padding: 0 9px 1px;
  align-self: center;
`

export const BoxInfo = styled.div`
  padding: 7px 0px;
  position: relative;
  width: 100%;
`

export const Image = styled.img`
  width: 65px;
  height: 65px;
`
export const DescriptionText = styled.p`
  font-size: ${metrics.fonts.size.small};
  min-height: 32px;
  max-height: 32px;
  padding: 0 2px;
`

export const PriceText = styled.p`
  font-size: ${metrics.fonts.size.small};
  text-align: right;
  padding: 0 9px 0 0;
  font-size: ${metrics.fonts.size.normal};
  font-weight: bold;
  margin: 16px 0 0 0px;
  width: 100%;
  // position: absolute;
  // bottom: 11px;
  // right: -8px;
`

export const Figure = ({ className, src, children }) => (
  <BoxImage>
    <Image src={src} alt="" />
  </BoxImage>
)

export const Description = ({ text, price, showPrice = true, children }) => (
  <BoxInfo>
    <DescriptionText>{text}</DescriptionText>
    <PriceText>{showPrice ? price : ''}</PriceText>
  </BoxInfo>
)
