import React, { useReducer, useState } from 'react'
import Container from '../Components/Container/Container'
import Content from '../Components/Content/Content'
import Header from '../Components/Header/Header'
import { initialState, allReducer } from '../Store'
import DataContext from '../Store/DataContext'
import './App.css'

const App = () => {
  const [page, setPage] = useState('Cart')
  const [state, dispatch] = useReducer(allReducer, initialState)
  const providerState = {
    state,
    dispatch
  }

  const handleChange = (page) => {
    setPage(page)
  }
  return (
    <DataContext.Provider value={providerState}>
      <div className="App">
        <Container>
          <Header onChangePage={handleChange} />
          <Content page={page} onChangePage={handleChange} />
        </Container>
      </div>
    </DataContext.Provider>
  )
}

export default App
