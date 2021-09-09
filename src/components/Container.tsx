import React from 'react'

import { styled } from '@/style/stitches.config'

const ContainerStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray100',
  height: '100%',
  variants: {
    size: {
      mediumDevice: {
        width: '80vw',
        margin: '0 auto',
        marginTop: '50px'
      },
      largeDevice: {
        width: '60vw',
        margin: '0 auto',
        marginTop: '50px'
      },
      xlargeDevice: {
        width: '50vw',
        margin: '0 auto',
        marginTop: '50px'
      }
    }
  }
})

interface OwnProps {
  children: JSX.Element
}

const Container = (props: OwnProps): JSX.Element => (
  <ContainerStyled
    size={{
      '@md': 'mediumDevice',
      '@xl': 'largeDevice',
      '@xxl': 'xlargeDevice'
    }}
  >
    {props.children}
  </ContainerStyled>
)

export default Container
