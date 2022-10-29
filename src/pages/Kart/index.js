import React, { useEffect } from 'react'
import requestAPI from '../../utils/requestAPI'

const Kart = () => {
  useEffect(() => {
    requestAPI({ url: 'http://www.mocky.io/v2/5b15c4923100004a006f3c07' }).then((resp) =>
      console.log(resp.data)
    )
  }, [])

  return (
    <div>
      <h1>Kart</h1>
    </div>
  )
}

export default Kart
