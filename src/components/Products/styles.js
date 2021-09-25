import styled from 'styled-components'

import { Container } from '../../components/Utils/styles'

export const ContainerProducts = styled(Container)`
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

export const ProductWrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 7px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const ProductImageWrapper = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 28%;

  img {
    height: 65px;

    @media screen and (min-width: 64em) {
      height: 95px;
    }

    @media screen and (min-width: 80em) {
      height: 105px;
    }
  }
`

export const ProductImage = styled.img`
  height: 65px;
`

export const ProductInfoWrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
`

export const ProductInfoDescription = styled.p`
  font-size: 13px;
  line-height: 16px;
`

export const ProductInfoPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  text-align: right;
`
