import * as Styles from './Title.styles'
interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <Styles.Title>{children}</Styles.Title>
}

export default Title
