import React from 'react'
import { ContainerTitleSection } from './TitleSection.style'

const TitleSection = (props) => {
  const { title } = props
  return (
    <ContainerTitleSection>
      <h1>{title}</h1>
    </ContainerTitleSection>
  )
}

export default TitleSection
