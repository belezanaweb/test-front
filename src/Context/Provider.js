import React, { useState, useEffect } from 'react'
import Context from './MyContext'
import PropTypes from 'prop-types'

export default function Provider({ children }) {
  const [apiData, setApiData] = useState([])

  const data = async () => {
    const url = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    const urlJson = await url.json()
    console.log(urlJson)
    return urlJson
  }
  data()

  const dados = {
    data,
    apiData,
    setApiData
  }

  useEffect(() => {
    const apiData = async () => {
      const { results } = await data()
      results.map((item, index) => setApiData(results))
    }
    apiData()
  })

  return <Context.Provider value={dados}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}
