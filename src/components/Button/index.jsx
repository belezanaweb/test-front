import { StyledButton } from './styled'
import { useNavigate } from 'react-router-dom'

const Button = ({ children, path, data, disabled }) => {
  const navigate = useNavigate()

  return path ? (
    <StyledButton disabled={disabled} onClick={() => navigate(path, { state: { data } })}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton disabled={disabled}>{children}</StyledButton>
  )
}

export default Button
