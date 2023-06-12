import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/navigation'
import { Summary } from '../components/summary/Summary'

const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Summary />
      </footer>
    </div>
  )
}

export { Layout }
