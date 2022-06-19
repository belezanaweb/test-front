import { StyledButton } from './styled'
import { useNavigate } from 'react-router-dom'

const Button = ({ children, path, data }) => {
  const navigate = useNavigate()

  return <StyledButton onClick={() => navigate(path, { state: { data } })}>{children}</StyledButton>
}

export default Button
