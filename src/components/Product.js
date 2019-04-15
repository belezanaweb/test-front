/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { PropTypes } from 'prop-types';

const ProductBody = styled('div')`
  border: solid 1px #F0F0F0;	
  padding: 12px;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  margin-top: 15px;	
  height: 90px;
`
const ContainerImg = styled('div')`
  display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 65px;
	height: 65px;
	margin-right: 11px;	
`
const ProductDescription = styled('div')`
  display: flex;
	flex-direction: column;
	justify-content: space-between;
  font-size: 13px;
  
  span{
    text-align: right;
    font-size: 14px;
    font-weight: 700;  
    line-height: 17px;  
  }
`

const Product = ({item}) => {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    const price = (item.product.priceSpecification.price).toLocaleString('pt-BR', format)

    return(
        <ProductBody>
            <ContainerImg>
                <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name}/>
            </ContainerImg>
            <ProductDescription>
                <p>{item.product.name}</p>
                <span>{price}</span>
            </ProductDescription>
        </ProductBody>
    )
}

Product.propTypes = {
    item: PropTypes.object.isRequired
}

export default Product