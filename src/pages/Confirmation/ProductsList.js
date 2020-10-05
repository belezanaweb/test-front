import React, { useContext } from 'react'
import ProductsContext from '../../contexts/ProductsContext'
import { CardDetails, CardWrapper, ProductImg, ProductsListWrapper } from './style'

const ProductsList = () => {
    const products = useContext(ProductsContext)
    const items = products.items

    return (
        <ProductsListWrapper>
            {items && items.map(item => {
                return (
                    <CardWrapper key={item.product.sku}>
                        <ProductImg src={item.product.imageObjects[0].small} alt={item.product.name} />
                        <CardDetails>
                            <label>{item.product.name}</label>
                        </CardDetails>
                    </CardWrapper>
                )
            })}
        </ProductsListWrapper>
    )
}

export default ProductsList