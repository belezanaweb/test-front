import React, { useState, useEffect } from 'react'
import Context from './Context'
import PropTypes from 'prop-types'

export default function Provider({ children }) {
  const [cart, setCart] = useState(null)
  const [number, setNumber] = useState()
  const [name, setName] = useState('')
  const [date, setDate] = useState(0)
  const [cvv, setCvv] = useState(0)
  const [isDisable, setIsDisable] = useState(true)
  // const cardValidation = /^[0-9]{5}$/
  // const nameValidation = /^[a-z ,.'-]+$/i
  const cardValidation = 44
  const nameValidation = 'r'
  const dateValidation = 1
  const cvvValidation = 5

  const handleChangeNumber = (e) => {
    setNumber(Number(e.target.value))
    if (number === Number(cardValidation)) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
    if (name === nameValidation) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }

  const handleChangeDate = (e) => {
    setDate(Number(e.target.value))
    if (date === dateValidation) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }

  const handleChangeCvv = (e) => {
    setCvv(Number(e.target.value))
    if (cvv === cvvValidation) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
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
    cvv,
    setCvv,
    isDisable,
    setIsDisable,
    handleChangeNumber,
    handleChangeName,
    handleChangeDate,
    handleChangeCvv
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

Provider.propTypes = {
  children: PropTypes.objectOf
}.isRequired
