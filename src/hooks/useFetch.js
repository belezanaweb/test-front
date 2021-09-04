import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const request = React.useCallback(async (url, options) => {
    let json
    try {
      setError(null)
      setLoading(true)
      const response = await fetch(url, options)
      json = await response.json()
    } catch (err) {
      json = null
      setError(err.message)
    } finally {
      setData(json)
      setLoading(false)
    }

    return { json }
  }, [])

  return {
    data,
    loading,
    error,
    request
  }
}

export default useFetch
