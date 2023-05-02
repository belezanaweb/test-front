import GenericPage from '../components/GenericPage'
import Card from '../components/Card'
import useCart from '../hooks/useCart'
import CartItem from '../components/CartItem'
import { Fragment } from 'react'
import Summary from '../components/Summary'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

function BagPage() {
  const { data, isLoading } = useCart()
  const navigate = useNavigate()

  return (
    <GenericPage>
      <Card className="m:m-[10px] md:mt-[10vh]">
        {isLoading && <Spinner height={'72'} />}
        {!isLoading &&
          data?.items.map(({ product }) => (
            <Fragment key={`bag-product:${product.sku}`}>
              <CartItem product={product} />
            </Fragment>
          ))}
      </Card>
      <Summary
        renderAction={() => (
          <Button onClick={() => navigate('/pagamento')}>Seguir para o pagamento</Button>
        )}
      />
    </GenericPage>
  )
}

export default BagPage
