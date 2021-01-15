import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from './styles'

export default function Footer({ buttonstatus = false, text, nav }) {
  const history = useHistory()
  return (
    <Button nav={nav} onClick={() => history.push(nav)} disabled={buttonstatus}>
      {text}
    </Button>
  )
}
