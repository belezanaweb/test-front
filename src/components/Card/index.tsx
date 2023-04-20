import { CardProps } from './interfaces'

import { Wrapper } from './styled'

const Card = ({ children }: CardProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default Card
