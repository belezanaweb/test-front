import { TextProps } from './interfaces'
import * as Styled from './styled'

const Text = ({ children, size, weight, $color, decoration, fullWidth, as = 'span' }: TextProps) => (
  <Styled.Tag as={as} size={size} weight={weight} $color={$color} fullWidth={fullWidth} decoration={decoration}>
    {children}
  </Styled.Tag>
)

export default Text
