import React, { useContext } from 'react'
import { PagesWrapper } from '../../AppStyle'
import Header from '../../components/Header'
import CardDetailsContext from '../../contexts/CardDetails'

const Confirmation = () => {
  const { form } = useContext(CardDetailsContext)
  console.log(form)

  return (
    <PagesWrapper>
      <Header selectedPage={"confirmation"} />
    </PagesWrapper>
  )
}

export default Confirmation