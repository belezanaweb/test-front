import React from 'react'; 
import styled from 'styled-components'; 

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
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 14px;
    line-height: 17px;
`

const Price = styled.div`
    grid-area: "price";
    height: 17px;
    width: 124px;
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 14px;
    letter-spacing: NaNpx;
    line-height: 17px;
    text-align: right;
`

const Line = styled.div`
    height: 17px;
    display: flex;
    justify-content: space-between;
    padding: 1vh;
`

const CardTotalShipping = (props) => {
    return (
        <Card>
            <Line>
                <Type>
                    PRODUTOS
                </Type>
                <Price>
                    R$ 624,80
                </Price>
            </Line>
            <Line>
                <Type>
                    FRETE
                </Type>
                <Price>
                    R$ 5,30
                </Price>
            </Line>
            <Line>
                <Type>
                    DESCONTO
                </Type>
                <Price>
                   - R$ 30,00
                </Price>
            </Line>
            <Line>
                <Type>
                    TOTAL
                </Type>
                <Price>
                    R$ 600,10
                </Price>
            </Line>
        </Card>
    )
}

export default CardTotalShipping;