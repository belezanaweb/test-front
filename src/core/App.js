import React, { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

import Breadcrumb from '../components/breadcrumb'
import { AppContainer, AppRouter } from './app.style'
import getBreadcrumbItems from '../components/breadcrumb/breadcrumb.service'
import Routers from './router'
import { LOAD_BREADCRUMB } from '../store/actionTypes/breadcrumb'

const App = () => {
  const breadcrumb = useSelector((state) => state.breadcrumb)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getBreadcrumb() {
      const data = getBreadcrumbItems()
      dispatch({ type: LOAD_BREADCRUMB, breadcrumb: data })
    }

    getBreadcrumb()
  }, [dispatch])

  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <AppContainer>
        <AppRouter>
          <Routers />
        </AppRouter>
      </AppContainer>
    </>
  )
}

export default App
