import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProductCard = styled.div`
    height: ${props => props.isRenderPrice ? '90px' : 'none'};
    width: 316px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #EEE;
    display: grid;
    grid-template-columns: 30% 70%;
`

const Image = styled.img`
    height: 65px;
    width: 65px;
`
const Name = styled.div`
    height: 58px;
    width: 220px;
    color: #212122;
    font-size: 13px;
    font-family: "Helvetica Neue";
    line-height: 16px;
    padding-top: 1vh;
`

const Price = styled.div`
    height: 17px;
    width: 220px;
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: right;
`

const Infos = styled.div`
`

const CardProduct = (props) => {
    return (
        <Card title="PRODUTOS" heightBox={props.height}>
            {props.products && props.products.map(item => (
                <ProductCard isRenderPrice={props.isRenderPrice}>
                    <Image src={item.product.imageObjects[0].medium} />
                    <Infos>
                        <Name>
                            {item.product.name}
                        </Name>
                        { props.isRenderPrice ? 
                        <Price>
                            R$ {item.product.priceSpecification.price && item.product.priceSpecification.price.toFixed(2)}
                        </Price> 
                        : null}
                    </Infos>
                </ProductCard>
            ))}
        </Card>
    )
}

export default CardProduct;