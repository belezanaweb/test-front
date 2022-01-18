import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 12px 10px 14px;
  border-radius: 3px;
  border: 1px solid #eee;
  display: flex;
`
export const Image = styled.img`
  width: ${({ noPrice }) => (noPrice ? '42px' : '65px')};
  height: ${({ noPrice }) => (noPrice ? '42px' : '65px')};
  margin-right: 10px;
`

export const ContentContainer = styled.div`
  position: relative;
  flex: 1;
`

export const Price = styled.p`
  color: #212122;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  position: absolute;
  bottom: 0;
  right: 0;
`
export const NameProduct = styled.p`
  font-size: 13px;
`
