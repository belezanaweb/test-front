import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Switch } from 'react-router-dom'

import favicon from './assets/favicon.ico'

import Home from './screens/home'
import NotFound from './screens/not-found'
import Layout from './layouts/app'

import routes from './routes'

const App: React.FC<any> = () => {
  return (
    <div>
      <Helmet
        defaultTitle="Grupo Boticário"
        titleTemplate="%s – Grupo Boticário"
        link={[{ rel: 'icon', type: 'image/ico', href: favicon }]}
      />
      <Layout>
        <Switch>
          <Route exact={true} path={routes.home} component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
