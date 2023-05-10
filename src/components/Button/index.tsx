import * as S from './styles'

type Props = {
  title: string
  type?: 'default' | 'primary'
  onClick: () => void
}

export const Button = ({ title, type, onClick }: Props) => (
  <S.Container onClick={onClick} $type={type}>
    {title}
  </S.Container>
)
