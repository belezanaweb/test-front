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
