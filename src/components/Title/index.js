import React from 'react'
import TitleWrapper from './styles'

const Title = ({ children, type, icon }) => {
  return (
    <TitleWrapper>
      <div className={`${type === 'title' ? 'title' : 'title-success'}`}>
        {icon}
        {children}
      </div>
    </TitleWrapper>
  )
}

export default Title
