import React from 'react'
import { string, number } from 'prop-types';
import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => props.width} + 'px';
  height: ${props => props.height} + 'px';
`

const ImageWrapper = ({ alt, ...props }) => {
  return (
    <Container>
      <img alt={alt} {...props} />
    </Container>
  )
}

ImageWrapper.prototype = {
  alt: string.isRequired,
  src: string.isRequired,
  width: number,
  height: number,
}

export default ImageWrapper
