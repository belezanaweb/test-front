import { StyledButton } from './styled'
import { useNavigate } from 'react-router-dom'

export const Button = ({ children, path, data }) => {

  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate(`${path}`, { state: {data}})}>
      {children}
    </StyledButton>
  )
}
