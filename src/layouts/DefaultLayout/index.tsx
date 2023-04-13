import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, ContentContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  )
}
