import React, { useState, useEffect } from 'react'
import Context from './Context'
// import PropTypes from 'prop-types'

export default function Provider({ children }) {
  const [cart, setCart] = useState(null)
  const [number, setNumber] = useState()
  const [name, setName] = useState()
  const [date, setDate] = useState()
  const [cvv, setCvv] = useState()
  // const [isDisable, setIsDisable] = useState(true)
  // const cardValidation = /^[0-9]{16}$/i
  // const cardValidation = 4444444444444444
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

  const handleChangeCvv = (e) => {
    setCvv(e.target.value)
  }

  // const handleValidation = () => {
  //   if (number === cardValidation) {
  //     setIsDisable(false)
  //   } else if (!number.match(cardValidation)) {
  //     setIsDisable(true)
  //   }
  // }

  // const doubleFunction = () => {
  //   handleChangeNumber()
  //   handleValidation()
  // }

  const data = {
    cart,
    setCart,
    number,
    setNumber,
    name,
    setName,
    date,
    setDate,
    cvv,
    setCvv,
    // isDisable,
    // setIsDisable,
    handleChangeNumber,
    handleChangeName,
    handleChangeDate,
    handleChangeCvv
    // doubleFunction,
    // handleValidation,
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
