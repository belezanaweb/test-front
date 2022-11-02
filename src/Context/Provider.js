import React from 'react'
import Context from './Context'
// import PropTypes from 'prop-types'

export default function Provider(children) {
  return (
    <div>
      <Context.Provider value={children}>
        <Provider />
      </Context.Provider>
    </div>
  )
}
