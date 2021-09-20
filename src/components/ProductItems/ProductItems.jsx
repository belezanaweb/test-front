import React from 'react'

import { formatBrl } from '../../utils'
import {
  MainContainer,
  MainSubContainer,
  Box,
  InsideBox,
  ContainerBox,
  DivDescription,
  DivPrice,
  TitleCartStyled
} from '../../styles/Products/Products'

export default function ProductItems({ dataEndPoint }) {
  const getImages = (props, index) => {
    return props?.items
      ?.flatMap((item) => item.product)
      ?.flatMap((subItem) => subItem.imageObjects)
      ?.map((realImage) => realImage.small)[index]
  }

  const getNames = (props, index) => {
    return props?.items?.flatMap((item) => item.product)?.map((nameItem) => nameItem.name)[index]
  }

  const getPrice = (props, index) => {
    return props?.items
      ?.flatMap((item) => item.product)
      ?.flatMap((subItem) => subItem.priceSpecification)
      ?.map((value) => value.price)[index]
  }

  return (
    <>
      <MainContainer>
        <MainSubContainer>
          <TitleCartStyled>Produtos</TitleCartStyled>
          <Box>
            <InsideBox>
              <div>
                <img
                  alt={`nome deste produto é ${getNames(dataEndPoint, 0)}`}
                  src={getImages(dataEndPoint, 0)}
                  height="65px"
                  width="65px"
                />
              </div>
              <ContainerBox>
                <DivDescription>{getNames(dataEndPoint, 0)}</DivDescription>
                <DivPrice>{formatBrl(getPrice(dataEndPoint, 0))}</DivPrice>
              </ContainerBox>
            </InsideBox>
            <InsideBox>
              <div>
                <img
                  alt={`nome deste produto é ${getNames(dataEndPoint, 1)}`}
                  src={getImages(dataEndPoint, 1)}
                  height="65px"
                  width="65px"
                />
              </div>
              <ContainerBox>
                <DivDescription>{getNames(dataEndPoint, 1)}</DivDescription>
                <DivPrice>{formatBrl(getPrice(dataEndPoint, 1))}</DivPrice>
              </ContainerBox>
            </InsideBox>
            <InsideBox>
              <div>
                <img
                  alt={`nome deste produto é ${getNames(dataEndPoint, 2)}`}
                  src={getImages(dataEndPoint, 2)}
                  height="65px"
                  width="65px"
                />
              </div>
              <ContainerBox>
                <DivDescription>{getNames(dataEndPoint, 2)}</DivDescription>
                <DivPrice>{formatBrl(getPrice(dataEndPoint, 2))}</DivPrice>
              </ContainerBox>
            </InsideBox>
          </Box>
        </MainSubContainer>
      </MainContainer>
    </>
  )
}
