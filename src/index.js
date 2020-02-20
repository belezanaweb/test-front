import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Routes from './routes';

import { CartProvider } from './context/CartContext';

const Strict = () => (
	<StrictMode>
		<CartProvider>
			<Routes />
		</CartProvider>
	</StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()