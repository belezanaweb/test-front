import { BulletList } from 'react-content-loader'
import { Card } from '../Card'

import * as S from './styles'

export const Loader = () => (
  <Card>
    <S.Container>
      <BulletList />
    </S.Container>
  </Card>
)
