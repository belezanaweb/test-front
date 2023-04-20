import { Skeleton } from 'components'

import * as Styled from './styled'

const SkeletonCheckout = () => {
  return (
    <Styled.Wrapper>
      <Skeleton $height="40px" />
      <Skeleton $height="300px" />
      <Skeleton $height="200px" />
    </Styled.Wrapper>
  )
}

export default SkeletonCheckout
