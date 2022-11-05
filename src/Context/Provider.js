import React, { useState, useEffect } from 'react'
import Context from './Context'
// import PropTypes from 'prop-types'

export default function Provider({ children }) {
  const [cart, setCart] = useState(null)
  const [number, setNumber] = useState()
  const [name, setName] = useState()
  const [date, setDate] = useState()
  // const { setIsDisable } = useContext(Context);

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
    // console.log(number)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeDate = (e) => {
    setDate(e.target.value)
  }

  const data = {
    cart,
    setCart,
    number,
    setNumber,
    name,
    setName,
    date,
    setDate,
    handleChangeNumber,
    handleChangeName,
    handleChangeDate
  }

  useEffect(() => {
    const cart = async () => {
      const url = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const data = await url.json()
      setCart(data)
    }
    cart()
  }, [])

  return (
    <div>
      <Context.Provider value={data}>{children}</Context.Provider>
    </div>
  )
}

// Provider.propTypes = {
//   children: PropTypes.objectOf
// }.isRequired
