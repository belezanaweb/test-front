import { css } from 'styled-components'

type TransitionProps = {
  property?: string,
  duration?: string
}

export const Transition = ({ property = 'all', duration = '0.3s' }: TransitionProps) => {
  return css`
    transition: ${property} ease ${duration};
  `
}

export const DesktopScreen = (styles: TemplateStringsArray) => css`
  @media (min-width: 1024px) {
    ${css(styles)};
  }
`
