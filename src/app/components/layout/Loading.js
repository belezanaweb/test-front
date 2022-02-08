import React from 'react'
import { ContainerLoading } from './Loading.style.js'
import { Rings } from 'react-loader-spinner'

const Loading = () => {
  return (
    <ContainerLoading>
      <Rings heigth="100" width="100" color="#FF7800" ariaLabel="loading" />
    </ContainerLoading>
  )
}

export default Loading
