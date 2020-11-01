import styled from 'styled-components'

export const SuccessAlertContainer = styled.section`
  display: grid;
  justify-items: center;
  grid-gap: 11px;
  grid-column-end: span 2;
`

export const SuccessAlertText = styled.h1`
  margin: 0;
  color: #ff7800;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.21428571428571;
  text-align: center;
  text-transform: uppercase;
`

export const SuccessAlertIcon = styled.img.attrs({
  'aria-hidden': true,
  src: '/images/icon-checkmark-circle.png'
})`
  width: 40px;
  height: 40px;
  object-fit: contain;
  object-position: 50% 50%;
`
