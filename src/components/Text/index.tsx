import React, { ReactNode } from 'react'
import theme from '../../theme'
import { Typography } from './styled'

export type TextProps = {
  fontSize: keyof typeof theme.font.sizes,
  color: keyof typeof theme.colors,
  fontWeight: keyof typeof theme.font.Weight,
  textAlign?: string,
  lineHeight?: keyof typeof theme.spacings,
  textDecoration?: string,
  letterSpacing?: string,
  children: ReactNode
}

const Text = ({ color, fontSize, fontWeight, textAlign="left", lineHeight="medium", textDecoration, letterSpacing, children }: TextProps) => {
  return <Typography 
            color={color} 
            fontSize={fontSize} 
            fontWeight={fontWeight} 
            textAlign={textAlign}
            lineHeight={lineHeight}
            textDecoration={textDecoration}
            letterSpacing={letterSpacing}
        >
            {children}
        </Typography>
}

export default Text
