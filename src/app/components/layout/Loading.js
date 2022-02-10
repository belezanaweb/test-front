import React from 'react'
import { ContainerLoading, ContainerInternalLoading } from './Loading.style.js'
import { Rings } from 'react-loader-spinner'

export const Loading = () => {
  return (
    <ContainerLoading>
      <Rings heigth="100" width="100" color="#FF7800" ariaLabel="loading" />
    </ContainerLoading>
  )
}

export const InternalLoading = () => {
  return (
    <ContainerInternalLoading>
      <Rings heigth="100" width="100" color="#FF7800" ariaLabel="loading" />
    </ContainerInternalLoading>
  )
}
