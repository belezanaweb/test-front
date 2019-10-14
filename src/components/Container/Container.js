import React from 'react'
import { StyledContainer } from './style'
import Title from 'components/Title/Title'

const Container = ({ title, ...props }) => {
  return (
    <>
      <Title>{title}</Title>
      <StyledContainer {...props} />
    </>
  )
}

export default Container
