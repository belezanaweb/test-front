import React, { ReactNode } from 'react'
import { Content } from './styles'
import Text from '../Text'

export type MainContentProps = {
  children: ReactNode,
  title?: string,
  height?: string
}

const MainContent = ({ title, height, children }: MainContentProps) => {
  return (
    <Content height={height}>
      {title && (
        <Text
          color="black"
          fontSize="xlarge"
          fontWeight="normal"
          textalign="left"
          lineheight="large"
        >
          {title}
        </Text>
      )}
      {children}
    </Content>
  )
}

export default MainContent
