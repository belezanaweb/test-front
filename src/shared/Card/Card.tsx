import { CardContainer } from "./Card.styled"

export const Card = ({ children = '' }) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}