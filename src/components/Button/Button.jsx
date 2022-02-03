import React from 'react'
import * as CSS from './style'

export default function Button(props) {
  return <CSS.Button onClick={props.onClick}>{props.children}</CSS.Button>
}
