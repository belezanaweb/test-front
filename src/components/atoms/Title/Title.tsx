import * as Styles from './Title.styles'
export interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <Styles.Title>{children}</Styles.Title>
}

export default Title
