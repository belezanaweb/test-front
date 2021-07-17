import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './loading.css'

const Loading = () => (
  <div className="iconSpace">
    <FontAwesomeIcon id="icon" class="fa-spin" icon={faSpinner} />
  </div>
)

export { Loading }
