import React from 'react'

import { CheckoutProvider } from './checkout'

const AppProvider = ({ children }) => <CheckoutProvider>{children}</CheckoutProvider>

export default AppProvider
