import * as Styles from './Button.styles'
interface ButtonProps {
  text: string;
  type: ('button' | 'submit');
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, disabled = false, type, onClick }) => {
  return (
    <Styles.Button type={type} disabled={disabled} onClick={onClick}>
      {text}
    </Styles.Button>
  )
}

export default Button
