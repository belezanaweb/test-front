import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'

import * as S from './styles'

export const Checkout = () => {
  return (
    <section>
      <header>
        <Navbar />
      </header>

      <S.Container>
        <Outlet />
      </S.Container>
    </section>
  )
}
