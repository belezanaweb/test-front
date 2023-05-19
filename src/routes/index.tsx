import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Page404, PageCheckout } from '../containers'

export const Router = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route key="checkout" path="/" element={<PageCheckout />} />
        <Route key="payment" path="/payment" element={<PageCheckout />} />
        <Route key="confirm" path="/confirm" element={<PageCheckout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
