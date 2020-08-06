import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

function Layout({ children }) {
  return (
    <main>
      <Header />
      { children }
      <Footer />
    </main>
  )
}
export default Layout

