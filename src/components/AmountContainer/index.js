import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    TotalContainer,
    Text, 
} from "./styles";

const TotalAmountContainer = (props) => {
    const [totalAmount, setTotalAmount] =  useState([])    
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07'); 
            
            setTotalAmount(result.data)
        }     
        fetchData()
    }, [])

    return(
        <>
            <TotalContainer>
                <Text className="products">PRODUTO</Text>
                <Text className="shipping">FRETE</Text>
                <Text className="productsAmount">R$ {totalAmount.subTotal}0</Text>
                <Text className="shippingAmount">R$ {totalAmount.shippingTotal}0</Text>
                <Text className="discount">DESCONTO</Text>
                <Text className="discountAmount">- R$ {totalAmount.discount},00</Text>
                <Text className="total">TOTAL</Text>
                <Text className="totalAmount">R$ {totalAmount.total}0</Text>                       
            </TotalContainer>                         
        </>
    )    
}
export default TotalAmountContainer