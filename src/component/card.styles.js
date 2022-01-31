import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 12px 10px 14px;
  border-radius: 3px;
  border: 1px solid #eee;
  display: flex;
`
export const Image = styled.img`
  margin-right: 10px;
  width: ${({ noPrice }) => (noPrice ? '68px' : '92px')};
  height: ${({ noPrice }) => (noPrice ? '68px' : '92px')};
  @media screen and (max-width: 1023px) {
    width: ${({ noPrice }) => (noPrice ? '42px' : '65px')};
    height: ${({ noPrice }) => (noPrice ? '42px' : '65px')};
  }
`

export const Source = styled.source`
  margin-right: 10px;
  width: ${({ noPrice }) => (noPrice ? '68px' : '92px')};
  height: ${({ noPrice }) => (noPrice ? '68px' : '92px')};
  @media screen and (max-width: 1023px) {
    width: ${({ noPrice }) => (noPrice ? '42px' : '65px')};
    height: ${({ noPrice }) => (noPrice ? '42px' : '65px')};
  }
`

export const ContentContainer = styled.div`
  position: relative;
  flex: 1;
`

export const Price = styled.p`
  font-size: 16px;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
  color: #212122;
  font-weight: 700;
  line-height: 17px;
  position: absolute;
  bottom: 0;
  right: 0;
`
export const NameProduct = styled.p`
  font-size: 15px;
  @media screen and (max-width: 1023px) {
    font-size: 13px;
  }
`
