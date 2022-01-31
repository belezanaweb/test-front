import styled from 'styled-components'

export const Line = styled.p`
  font-size: 16px;
  color: ${({ lineStyle }) => (lineStyle === 'discount' ? '#FF7800' : '#212122')};
  font-weight: ${({ lineStyle }) => (lineStyle === 'bold' ? 'bold' : 'normal')};
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`

export const Price = styled.span`
  display: inline-block;
  float: right;
`
