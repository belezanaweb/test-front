import * as Style from './Container.styles'

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return <Style.Container>{props.children}</Style.Container>
}

export default Container
