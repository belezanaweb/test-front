import { SKeletonProps } from './interfaces'
import * as Styled from './styled'

const Skeleton = ({ $width, $height }: SKeletonProps) => {
  return <Styled.SSkeletonPulse $height={$height} $width={$width} />
}

export default Skeleton
