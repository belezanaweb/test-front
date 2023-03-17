import { FC } from "react";
import { IButton } from "./Button.interface";
import './styles.scss'


const Button: FC<IButton> = ({text, ...props}) => {
  return (
    <button className="button" {...props}>
      <span>{text}</span>
    </button>
  )
}

export default Button;
