import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { CART_PATH, PAYMENT_PATH, PAYMENT_SUCCESS_PATH } from '../constants/paths'

function RouterConfig(): JSX.Element {
  return (
    <Routes>
      <Route path={CART_PATH} element={<h1>Sacola</h1>} />
      <Route path={PAYMENT_PATH} element={<h1>Pagamento</h1>} />
      <Route path={PAYMENT_SUCCESS_PATH} element={<h1>Sucesso</h1>} />

      <Route path="*" element={<Navigate replace to={CART_PATH} />} />
    </Routes>
  )
}

export default RouterConfig
