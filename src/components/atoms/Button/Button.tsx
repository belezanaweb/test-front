import * as Styles from './Button.styles'
export interface ButtonProps {
  text: string;
  type: ('button' | 'submit');
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, disabled = false, type, onClick }) => {
  return (
    <Styles.Container>
      <Styles.Button type={type} disabled={disabled} onClick={onClick}>
        {text}
      </Styles.Button>
    </Styles.Container>

  )
}

export default Button
