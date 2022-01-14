import styled from 'styled-components'

export const Line = styled.p`
  font-size: 14px;
  color: ${({ lineStyle }) => (lineStyle === 'discount' ? '#FF7800' : '#212122')};
  font-weight: ${({ lineStyle }) => (lineStyle === 'bold' ? 'bold' : 'normal')};
`

export const Price = styled.span`
  display: inline-block;
  float: right;
`
