import { useLocation, useNavigate } from 'react-router-dom'
import GenericPage from '../components/GenericPage'
import Card from '../components/Card'
import Summary from '../components/Summary'
import Button from '../components/Button'
import useCart from '../hooks/useCart'
import Spinner from '../components/Spinner'
import { Fragment } from 'react'
import CartItem from '../components/CartItem'

function OrderPlaced() {
  const { state } = useLocation()
  const { data, isLoading } = useCart()
  const navigate = useNavigate()
  return (
    <GenericPage>
      <Card className="text-center pt-5">
        <h1 className="text-2xl leading-6">Compra efetuada com sucesso</h1>
        <div className="text-base text-neutral-700 leading-5">
          <p className="pt-2">{state.cardNumber}</p>
          <p className="pt-2">{state.cardOwner}</p>
          <p className="pt-2">{state.cardExpirationDate}</p>
        </div>
      </Card>
      <Card className="mt-0">
        <h2 className="text-xl leading-6 mt-4">Produtos</h2>
        {isLoading && <Spinner />}
        {!isLoading &&
          data?.items.map(({ product }) => (
            <Fragment key={`bag-product:${product.sku}`}>
              <CartItem product={product} showPrice={false} />
            </Fragment>
          ))}
      </Card>
      <Summary
        renderAction={() => (
          <Button onClick={() => navigate('/')} variant="black">
            Voltar ao inicio do protótipo
          </Button>
        )}
      />
    </GenericPage>
  )
}

export default OrderPlaced
