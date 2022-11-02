import React, { useContext } from 'react'
import Header from '../Components/Header'
import Product from '../Components/Product'
import Total from '../Components/Total'
import Context from '../Context/Context'
// import PropTypes from 'prop-types'

export default function Confirmation() {
  const { cart } = useContext(Context)

  console.log(cart)
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>COMPRA EFETUADA COM SUCESSO</div>
        <div>
          PAGAMENTO
          <p>dados do pagamento</p>
        </div>
        <div>
          PRODUTOS {<Product />}
          {/* {cart.items.map((item) => (
                        <Product
                            name={item.product.name}
                            image={item.product.imageObjects[0].thumbnail}
                        />
                    ))} */}
        </div>
        <section>
          <Total />
        </section>
      </main>
    </div>
  )
}

// Confirmation.propTypes = { cart: PropTypes.isRequired }
