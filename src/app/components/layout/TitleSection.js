import React from 'react'
import { ContainerTitleSection } from './TitleSection.style'

const TitleSection = (props) => {
  return (
    <ContainerTitleSection>
      <h1>{props.title}</h1>
    </ContainerTitleSection>
  )
}

export default TitleSection
