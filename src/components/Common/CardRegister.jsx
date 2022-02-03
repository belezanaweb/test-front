import React from 'react'
import styled from 'styled-components'

/**
 *  Function to render register card
 */

export default function CardRegister() {
  const card = JSON.parse(localStorage.getItem('gb:card'))

  return (
    <div>
      <Text>****.****.****.{card?.number?.slice(15, 19)}</Text>
      <Text>{card?.name}</Text>
      <Text>{card?.expiry}</Text>
    </div>
  )
}

export const Text = styled.h2`
  color: #000;
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
  margin: 0px;
  text-transform: uppercase;
`
