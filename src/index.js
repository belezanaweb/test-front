import React from 'react'
import { unstable_createRoot as createRoot } from 'react-dom'
// styles
import 'minireset.css/minireset.min.css'
import './styles/global.css'
import './styles/typography.css'
// App
import App from './App'
import * as serviceWorker from './serviceWorker'
import { wrapRootElement } from './wrapRootElement'

const rootEl = document.getElementById('root')
const root = createRoot(rootEl, { hydrate: rootEl.hasChildNodes() })
const render = root.render.bind(root)

render(wrapRootElement({ element: <App /> }))

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(wrapRootElement({ element: <NextApp /> }))
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

if (process.env.NODE_ENV === 'development') {
  import(/* webpackChunkName: "dev" */ './dev')
}
