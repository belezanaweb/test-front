import React from 'react'
import { Container } from './style'

export const Message = ({ text }) => {
  return (
    <Container>
      <div className="icon">
        <div className="circle">
          <div className="check"></div>
        </div>
      </div>
      <p>{text}</p>
    </Container>
  )
}
