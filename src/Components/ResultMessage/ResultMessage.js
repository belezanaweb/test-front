import React from 'react'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'

import './ResultMessage.css'

const ResultMessage = (props) => {
  return (
    <div className="ResultMessage">
      {props.status === true ? (
        <BsCheckCircle data-testid="check" size={39.51} style={{ color: '#FF7800' }} />
      ) : props.status === false ? (
        <BsXCircle data-testid="nocheck" size={39.51} color="red" />
      ) : (
        <div></div>
      )}
      <span className="title">{props?.message?.toUpperCase()}</span>
    </div>
  )
}

export default ResultMessage
