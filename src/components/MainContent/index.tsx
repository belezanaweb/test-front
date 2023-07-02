import React, { ReactNode } from 'react'
import { Content } from './styles'
import Text from '../Text'

type MainContentProps = {
  children: ReactNode,
  title?: string
}

const MainContent = ({ title, children }: MainContentProps) => {
  return (
    <Content>
      {title && (
        <Text
          color="black"
          fontSize="xlarge"
          fontWeight="normal"
          textAlign="left"
          lineHeight="large"
        >
          {title}
        </Text>
      )}
      {children}
    </Content>
  )
}

export default MainContent
