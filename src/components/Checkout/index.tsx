import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'

export const Checkout = () => (
  <section>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </section>
)
