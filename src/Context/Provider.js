import React from 'react'
import MyContext from './MyContext'
import PropTypes from 'prop-types'

function Provider({ children }) {
  const initialState = {}
  return (
    <div>
      <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
    </div>
  )
}

Provider.propTypes = {
  children: PropTypes.objectOf
}.isRequired

export default Provider
