import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../global/styles/theme'
import { Header } from '../../components/header/Header'
import { Title } from '../../components/title/Title'
import { Paper } from '../../components/paper/Paper'
import { getProducts } from './service'

const Bag: React.FC = () => {
  const [bag, setBag] = useState<ProductBag[]>()

  useEffect(() => {
    const loadBag = async () => {
      const productsList = await getProducts()
      setBag(productsList)
    }

    loadBag()
  }, [])

  if (!bag) {
    return <></>
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Header
          items={[
            {
              label: 'sacola'
            },
            {
              label: 'pagamento'
            },
            {
              label: 'confirmação'
            }
          ]}
        />

        <Title>Produtos</Title>

        <Paper>
          {bag.map(({ product }) => (
            <div key={product.sku}>{product.name}</div>
          ))}
        </Paper>
      </div>
    </ThemeProvider>
  )
}

export { Bag }
