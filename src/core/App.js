import React from 'react'
import './App.css'
import { Provider } from 'react-redux'

import Breadcrumb from '../components/breadcrumb'
import { AppContainer, AppRouter } from './app.style'
import getBreadcrumbItems from '../components/breadcrumb/breadcrumb.service'
import store from '../store'
import Routers from './router'

const breadcrumbitems = getBreadcrumbItems()

const App = () => (
  <>
    <Provider store={store}>
      <Breadcrumb items={breadcrumbitems} />
      <AppContainer>
        <AppRouter>
          <Routers />
        </AppRouter>
      </AppContainer>
    </Provider>
  </>
)

export default App
