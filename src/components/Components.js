import React, { useEffect, useState } from 'react'

export default function API() {
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    const data = async () => {
      const url = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const urlJson = await url.json()
      setApiData(urlJson)
    }
    data()
  })

  return (
    <div>
      <form>
        <label>
          <p>lista de itens da API antes da api</p>
          <p>Conectando na api: {apiData.id}</p>
          <p>lista de itens da API depois da api</p>
        </label>
      </form>
    </div>
  )
}
