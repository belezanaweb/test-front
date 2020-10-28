import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Bag from './pages/bag'
import Breadcrumb from './components/breadcrumb'
import getBreadcrumbItems from './components/breadcrumb/breadcrumb.service'

const breadcrumbitems = getBreadcrumbItems()

const App = () => (
  <>
    <Breadcrumb items={breadcrumbitems} />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Bag} />
        <Route component={Bag} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
