import { makeStyles } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CarryBag from './pages/CarryBag/CarryBag'
import Confirmation from './pages/Confirmation/Confirmation'
import Payment from './pages/Payment/Payment'
import NotFound from './components/NotFound'

const useStyles = makeStyles({
  root: {
    background: '#EEE',
    minHeight: '110vh',
    fontFamily: 'Helvetica Neue'
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<CarryBag />} />
          <Route path="/pagamento" element={<Payment />} />
          <Route path="/sucesso" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
