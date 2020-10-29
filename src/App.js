import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Bag from './pages/bag'
import Breadcrumb from './components/breadcrumb'
import getBreadcrumbItems from './components/breadcrumb/breadcrumb.service'
import store from './store'

const breadcrumbitems = getBreadcrumbItems()

const App = () => (
  <>
    <Provider store={store}>
      <Breadcrumb items={breadcrumbitems} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Bag} />
          <Route component={Bag} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
)

export default App
