import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/navigation'
import { Summary } from '../components/summary'
import { ActionContextProvider } from '../contexts/ActionContext'
import * as Styled from '../components/styles'

const Layout = () => {
  return (
    <ActionContextProvider>
      <Styled.GlobalStyle />
      <Styled.Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Outlet />
        </main>
      </Styled.Container>
      <Styled.Footer>
        <Summary />
      </Styled.Footer>
    </ActionContextProvider>
  )
}

export { Layout }
