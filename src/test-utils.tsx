import React, { ComponentType, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { HeaderContextProvider } from './contexts/HeaderContext'
import { CartContextProvider } from './contexts/CartContext'
import { PaymentContextProvider } from './contexts/PaymentContext'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

interface renderWraperProps {
    children: React.ReactNode
}

const usedProviders = ({ children }: renderWraperProps) => {
    return (
        <HeaderContextProvider>
            <CartContextProvider>
                <PaymentContextProvider>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </PaymentContextProvider>
            </CartContextProvider>
        </HeaderContextProvider>
    )
}

const customRender = (ui: ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: usedProviders as ComponentType, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }