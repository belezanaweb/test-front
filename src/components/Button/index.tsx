import { ButtonProps } from './interfaces'
import * as Styled from './styled'

const Button = ({ onClick, text, fullWidth }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} fullWidth={fullWidth}>
      {text}
    </Styled.Button>
  )
}

export default Button
