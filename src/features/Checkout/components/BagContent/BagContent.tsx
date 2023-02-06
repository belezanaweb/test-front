import './style.scss'
import { Product } from './types'

interface BagContentProps {
  products: Product[]
}

export function BagContent({ products }: BagContentProps) {
  return (
    <section>
      <ul className='product-list '>
        {products?.map(productItem => {
          const { product } = productItem
          const { name, imageObjects, priceSpecification: { maxPrice, price } } = product
          return(
            <li className='product-item' key={`sku-${product.sku}`}>
              <article>
                <div className='product-left-box'>
                  <span className='product-img-box'>
                    <img src={imageObjects[0].thumbnail} alt={name} />
                  </span>
                  <p>{name}</p>
                </div>
                <span className='product-price-box'>
                  { 
                    maxPrice && 
                    <span data-testid={`product-${product.sku}-max-price`}>
                      {maxPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span> 
                  }
                  <span data-testid={`product-${product.sku}-price`}>
                    {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </span>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}