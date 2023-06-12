import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/navigation'
import { Summary } from '../components/summary/Summary'
import { ActionContextProvider } from '../contexts/ActionContext'

const Layout = () => {
  return (
    <div>
      <ActionContextProvider>
        <header>
          <Navigation />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Summary />
        </footer>
      </ActionContextProvider>
    </div>
  )
}

export { Layout }
