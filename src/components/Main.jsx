import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Payment from '../pages/Payment'
import Cart from '../pages/Cart'
import Confirmation from '../pages/Confirmation'

export default function Main({ sendDatas }) {
  const baseURL = 'https://www.mocky.io/v2/5b15c4923100004a006f3c07'
  const [currentStage, setCurrentStage] = useState(0)
  const [collectedData, setCollectedData] = useState({})
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data)
    })

    if (currentStage === stagesList.length - 1) {
      sendDatas(collectedData)
    }
  }, [])

  if (!items) return null

  const nextStage = () => {
    setCurrentStage(currentStage + 1)
  }

  const collectData = (data) => {
    setCollectedData({ ...collectedData, ...data })
    nextStage()
  }

  const stagesList = [
    <Cart nextStep={nextStage} dataEndPoint={items} />,

    <Payment sendDatas={collectData} dataEndPoint={items} />,

    <Confirmation sendDatas={collectedData} dataEndPoint={items} />
  ]

  return <>{stagesList[currentStage]}</>
}
