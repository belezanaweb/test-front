import { Outlet, Link, useLocation } from 'react-router-dom'

import { Header } from '@/components/header'
import { Tabs } from '@/components/ui/tabs'

type Link = {
  to: string
  name: string
}

const routes: Link[] = [
  {
    to: '/',
    name: 'Sacola'
  },
  {
    to: '/payment',
    name: 'Pagamento'
  },
  {
    to: '/confirmation',
    name: 'Confirmação'
  }
]

export const Layout = () => {
  const location = useLocation()

  return (
    <>
      <Header>
        <Tabs>
          {routes.map((link) => (
            <Tabs.List key={link.to} active={location.pathname === link.to}>
              <Link className="text-sm md:text-lg px-3 py-2 text-black" to={link.to}>
                {link.name}
              </Link>
            </Tabs.List>
          ))}
        </Tabs>
      </Header>

      <main className="container flex flex-col mx-auto">
        <Outlet />
      </main>
    </>
  )
}
