import { ReactNode } from 'react'

export interface TextStyledProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge'
  weight?: 'regular' | 'medium' | 'bold'
  $color?: 'black' | 'grey' | 'primary' | 'grey-weak' | 'grey-strong' | 'danger' | 'grey-default' | 'white'
  fullWidth?: boolean
  decoration?: string
}

export interface TextProps extends TextStyledProps {
  children: ReactNode
  as?: 'h1' | 'p' | 'span'
}
