import styled from 'styled-components'

import colors from '../../utils/colors'

export const Container = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid ${colors.whiteSmoke};
  padding: 12px 10px 14px 11px;
  display: flex;
`

export const Image = styled.div`
  margin-right: 11px;
  align-self: center;

  img {
    height: 65px;
  }
`
export const ContainerInfos = styled.div`
  flex: 1;
  flex-direction: column;
`
export const ProductName = styled.div`
  font-size: 13px;
`
export const ProductPrice = styled.div`
  font-weight: 700;
  text-align: right;
  font-size: 14px;
  margin-top: 15px;
`
