import React from 'react'
import { BoxWrapper, Content, Title } from './style'

const BackgroundBlock = ({ title, boxContent }) => {

  return (
    <BoxWrapper>
      <Title>{title}</Title>
      <Content>{boxContent}</Content>
    </BoxWrapper>
  )
}

export default BackgroundBlock