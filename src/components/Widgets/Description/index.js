import React from 'react'
import { TitleDescription } from './style'

/*
    Component for Description Box
    Props:
    Title - Title for description box
*/
const Description = (title) => {
  return (
    <>
      <TitleDescription>{title}</TitleDescription>
    </>
  )
}

Description.prototype = {
  title: PropTypes.string
}

export default Description
