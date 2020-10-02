import React, { useContext } from 'react'
import ProductsContext from '../../contexts/ProductsContext'
import { ProductsListWrapper, CardWrapper, CardDetails, Price, Img } from './style'

const ProductsList = () => {
    const products = useContext(ProductsContext)
    const items = products.items

    return (
        <ProductsListWrapper>
            {items && items.map(item => {
                return (
                    <CardWrapper key={item.product.sku}>
                        <Img src={item.product.imageObjects[0].small} alt={item.product.name} />
                        <CardDetails>
                            <label>{item.product.name}</label>
                            <Price>R$ {item.product.priceSpecification.price
                                .toFixed(2)
                                .replace(".", ",")}
                            </Price>
                        </CardDetails>
                    </CardWrapper>
                )
            })}
        </ProductsListWrapper>
    )
}

export default ProductsList