import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { createRoutes } from './routes'

const routes = createRoutes()

ReactDOM.render(routes, document.getElementById('root'))

serviceWorker.unregister()
