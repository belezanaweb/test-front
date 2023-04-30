import GenericPage from '../components/GenericPage'
import Card from '../components/Card'
import useCart from '../hooks/useCart'
import CartItem from '../components/CartItem'
import { Fragment } from 'react'
import Summary from '../components/Summary'
import Button from '../components/Button'

function BagPage() {
  const { data, isLoading } = useCart()

  return (
    <GenericPage>
      <Card>
        {isLoading && <h1>Carregando...</h1>}
        {!isLoading &&
          data?.items.map(({ product }) => (
            <Fragment key={`bag-product:${product.sku}`}>
              <CartItem product={product} />
            </Fragment>
          ))}
      </Card>
      <Summary renderAction={() => <Button>Seguir para o pagamento</Button>} />
    </GenericPage>
  )
}

export default BagPage
