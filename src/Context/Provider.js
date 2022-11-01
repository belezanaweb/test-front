import React, { useState } from 'react'
import Context from './MyContext'
import PropTypes from 'prop-types'

export default function Provider({ children }) {
  const [] = useState([])

  const dados = {}

  return <Context.Provider value={dados}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}
