import React from 'react'
import PropTypes from 'prop-types'
import { TitleDescription } from './style'

/*
    Component for Description Box
    Props:
    Title - Title for description box
*/
const Description = (props) => {
  return (
    <>
      <TitleDescription>{props.title}</TitleDescription>
    </>
  )
}

Description.prototype = {
  title: PropTypes.string
}

export default Description
