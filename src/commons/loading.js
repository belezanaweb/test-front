import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './loading.css'

const Loading = () => (
  <div className="iconSpace">
    <FontAwesomeIcon data-testid="icon" id="icon" className="fa-spin" icon={faSpinner} />
  </div>
)

export { Loading }
