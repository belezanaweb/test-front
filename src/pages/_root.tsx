import { PropsWithChildren } from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'

function Root({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <Breadcrumb />
      </Header>
      {children}
    </>
  )
}

export default Root
