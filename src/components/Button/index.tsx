import * as S from './styles'

type Props = {
  title: string
  onClick: () => void
}

export const Button = ({ title, onClick }: Props) => (
  <S.Container onClick={onClick}>{title}</S.Container>
)
