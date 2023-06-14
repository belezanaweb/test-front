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
        <Styled.Main>
          <Outlet />
        </Styled.Main>
      </Styled.Container>
      <Styled.Footer>
        <Summary />
      </Styled.Footer>
    </ActionContextProvider>
  )
}

export { Layout }
