import React from 'react'; 
import styled from 'styled-components'; 
import { connect } from "react-redux";

const Card = styled.div`
    height: 129px;
    width: 341px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #CCC;
    margin-top: 5vh;
`

const Type = styled.div`
    grid-area: "type";
    height: 17px;
    width: 124px;
    font-family: "Helvetica Neue";
    font-size: 14px;
    line-height: 17px;
`

const Price = styled(Type)`
    grid-area: "price";
    text-align: right;
`

const Line = styled.div`
    height: 17px;
    display: flex;
    justify-content: space-between;
    padding: 1vh;
    color: ${props => props.isDiscount ? '#FF7800' : '#212122'};
    font-weight: ${props => props.isTotal ? 'bold' : null};
`

const CardTotalShipping = (props) => {

    const fields = [
        {
          name: "PRODUTOS",
          value: props.cart.subTotal
        },
        {
          name: "FRETE",
          value: props.cart.shippingTotal
        },
        {
          name: "DESCONTO",
          value: props.cart.discount,
          isDiscount: true,
        },
        {
          name: "TOTAL",
          value: props.cart.total,
          isTotal: true
        },
        ]

    return (
        <Card>
            {fields && fields.map(field => (
                <Line isDiscount={field.isDiscount} isTotal={field.isTotal}>
                    <Type>
                        {field.name}
                    </Type>
                    <Price>
                       {field.isDiscount ? '- ' : null}
                       R$ {field.value && field.value.toFixed(2)}
                    </Price>
                </Line>
            ))}
        </Card>
    )
}

const mapStateToProps = state => {
    return {
      cart: state.cart.cart
    }
}
  
export default connect(mapStateToProps, null)(CardTotalShipping);